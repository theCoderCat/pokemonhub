var _ = require('lodash');
var UserModel = require('../models/user');
var PasswordHelper = require('../utils/password');

module.exports = function (req, res, next) {
  var userInfo = req.body;
  console.log(['user info: ', userInfo]);
  var p = PasswordHelper.hash(userInfo.password);
  console.log(['hashed password: ', p]);

  var newUser = new UserModel();

  newUser.username = userInfo.username;
  newUser.password = p;

  // check if user name is available
  var query = UserModel.findOne({
    username: userInfo.username
		});
  query.select('username password');

  query.exec(function (error, user) {
    if (error) {
      res.send('Something wrong has occured, try again later');
    } else {
      if (user) {
        res.send('Username not available, choose another one');
      } else {
        newUser.save(function (err, newUser) {
          if (err) {
            console.log("Have err");
            console.log(err);
          } else {
            console.log("create user success");
            res.json(newUser);
            return;
          }
        });
      }
    }
  });

};