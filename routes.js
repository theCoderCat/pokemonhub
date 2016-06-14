var UserRegister = require('./logics/user.register');
var UserGet = require('./logics/user.get');
var UserList = require('./logics/user.list');
var UserUpdate = require('./logics/user.update');

exports = module.exports = function (app, router) {
    /* GET home page. */
    router.get('/', function (req, res, next) {
        res.render('index', { title: 'Express' });
    });

    /* GET users listing. */
    router.get('/users', UserList);

    // get user information
    router.get('/users/:id', UserGet);

    // authenticate user

    // register user
    router.post('/users/register', UserRegister);

    // change user information
    router.post('/users/update', UserUpdate);

    return router;
}