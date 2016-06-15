var _ = require('lodash');
var TrainerModel = require('../models/trainer');
var PasswordHelper = require('../utils/password');
var jwt = require('jsonwebtoken');
var configs = require('../configs');

exports = module.exports = {
    authenticate: function (req, res, next) {
        var trainerInfo = req.body;
        var query = TrainerModel.findOne({
            trainername: trainerInfo.trainername
        });
        query.select('trainername password');

        query.exec(function (error, trainer) {
            if (error) {
                res.send('Something wrong has occured, try again later');
            } else {
                if (trainer) {
                    // perform password check
                    if (PasswordHelper.verify(trainerInfo.password, trainer.password)) {
                        var token = exports.createToken(trainer);
                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                        });
                    } else {
                        res.send('trainername and password does not match');
                    }
                } else {
                    res.send('trainername and password does not match');
                }
            }
        });
    },

    createToken: function (_trainer) {
        // if trainer is found and password is right
        // create a token
        var token = jwt.sign(_trainer, configs.secret, {
            expiresIn: "365 days" // expires in 24 hours
        });

        // return token
        return token;
    }
}

