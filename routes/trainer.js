var express = require('express');
var router = express.Router();
var TrainerLogin = require('../logics/trainer.login');
var TrainerRegister = require('../logics/trainer.register');
var TrainerGet = require('../logics/trainer.get');
var TrainerList = require('../logics/trainer.list');
var TrainerUpdate = require('../logics/trainer.update');
var TrainerLogout = require('../logics/trainer.logout');

/* GET trainers listing. */
router.get('/', TrainerList);

// get trainer information
router.get('/:id', TrainerGet);

// authenticate trainer
router.post('/login', TrainerLogin.authenticate);

// register trainer
router.post('/register', TrainerRegister);

// change trainer information
router.post('/update', TrainerUpdate);

// logout
router.get('/logout', TrainerLogout);

module.exports = router;