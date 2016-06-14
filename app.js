var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var jwt = require('jsonwebtoken');
var router = express.Router();

var configs = require('./configs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// connect to mongodb - persistent database
var mongoConfig = configs.mongoConfig;
if (mongoConfig.enable){
  mongoose.connect(mongoConfig.location);
}

// app.set('superSecret', configs.secret);

// login/logout routes
var UserLogin = require('./logics/user.login');
var UserLogout = require('./logics/user.logout');
var UserRegister = require('./logics/user.register');
router.post('/login', UserLogin.authenticate);
router.post('/register', UserRegister);
router.get('/logout', UserLogout);

// declare middleware
require('./middleware.js')(app, router);

// get routes
app.use(require('./routes.js')(app, router));
// app.use('/', require('./routes/index'));
// app.use('/users', require('./routes/users'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
