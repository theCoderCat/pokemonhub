// user
var UserRegister = require('./logics/user.register');
var UserGet = require('./logics/user.get');
var UserList = require('./logics/user.list');
var UserUpdate = require('./logics/user.update');

// pokemon
var PokemonCreate = require('./logics/pokemon.create');
var PokemonGet =  require('./logics/pokemon.get');
var PokemonList = require('./logics/pokemon.list');
var PokemonUpdate = require('./logics/pokemon.update');
var PokemonDelete = require('./logics/pokemon.delete');

// box
var BoxCreate = require('./logics/box.create');
var BoxGet =  require('./logics/box.get');
var BoxList = require('./logics/box.list');
var BoxUpdate = require('./logics/box.update');
var BoxDelete = require('./logics/box.delete');

// comments
var CommentCreate = require('./logics/comment.create');
var CommentGet =  require('./logics/comment.get');
var CommentList = require('./logics/comment.list');
var CommentUpdate = require('./logics/comment.update');
var CommentDelete = require('./logics/comment.delete');

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