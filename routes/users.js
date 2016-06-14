var express = require('express');
var router = express.Router();
var UserLogin = require('../logics/user.login');
var UserRegister = require('../logics/user.register');
var UserGet = require('../logics/user.get');
var UserList = require('../logics/user.list');
var UserUpdate = require('../logics/user.update');
var UserLogout = require('../logics/user.logout');

/* GET users listing. */
router.get('/', UserList);

// get user information
router.get('/:id', UserGet);

// authenticate user
router.post('/login', UserLogin.authenticate);

// register user
router.post('/register', UserRegister);

// change user information
router.post('/update', UserUpdate);

// logout
router.get('/logout', UserLogout);

module.exports = router;
