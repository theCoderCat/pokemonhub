// trainer
var TrainerRegister = require('./logics/trainer.register');
var TrainerGet = require('./logics/trainer.get');
var TrainerList = require('./logics/trainer.list');
var TrainerUpdate = require('./logics/trainer.update');

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

    /* GET trainers listing. */
    router.get('/trainers', TrainerList);

    // get trainer information
    router.get('/trainers/:id', TrainerGet);

    // authenticate trainer

    // register trainer
    router.post('/trainers/register', TrainerRegister);

    // change trainer information
    router.post('/trainers/update', TrainerUpdate);

    return router;
}