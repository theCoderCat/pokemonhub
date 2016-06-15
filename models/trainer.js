var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trainerSchema = new Schema({
  id: Number,
  name:  String,
  trainername: String,
  password: String,
  gender: String,
  email: String,
  active: Boolean,
  timezone: Number,
  update: Date
});

module.exports = mongoose.model('TrainerModel', trainerSchema);
