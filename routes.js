var routes = require('./routes/index');
var users = require('./routes/users');

module.exports = function (app, router) {
    app.use('/', routes);
    app.use('/users', users);
}