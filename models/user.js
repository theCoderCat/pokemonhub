var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:  String,
  username: String,
  password: String,
  gender: String,
  email: String,
  active: Boolean,
  timezone: Number,
});

module.exports = mongoose.model('UserModel', userSchema);
