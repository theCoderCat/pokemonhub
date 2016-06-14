var _ = require('lodash');
var configs = require('./configs');
var jwt = require('jsonwebtoken');

exports = module.exports = function (app, router) {
    // , redis_client
    // middleware to use for all requests -> check token, authentication ...

    router.use(function (req, res, next) {
        res.locals = {};
        // res.locals.redis_client = redis_client;
        res.locals.app = app;
        next();
    });

    router.use(function (req, res, next) {

        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, configs.secret, function (err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    console.log(decoded);
                    next();
                }
            });

        } else {

            // if there is no token
            // return an error
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        }
    });

};