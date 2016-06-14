var _ = require('lodash');
var UserModel = require('../models/user');
var PasswordHelper = require('../utils/password');
var jwt = require('jsonwebtoken');

exports = module.exports = {
    authenticate: function (req, res, next) {
        var userInfo = req.body;
        var query = UserModel.findOne({
            username: userInfo.username
        });
        query.select('username password');

        query.exec(function (error, user) {
            if (error) {
                res.send('Something wrong has occured, try again later');
            } else {
                if (user) {
                    // perform password check
                    if (PasswordHelper.verify(userInfo.password, user.password)) {
                        var token = exports.createToken(userInfo);
                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                        });
                    } else {
                        res.send('Username and password does not match');
                    }
                } else {
                    res.send('Username and password does not match');
                }
            }
        });
    },

    createToken: function (_userInfo) {
        // if user is found and password is right
        // create a token
        var token = jwt.sign(_userInfo, _userInfo.password, {
            expiresIn: "365 days" // expires in 24 hours
        });

        // return token
        return token;
    }
}

