var _ = require('lodash');
var TrainerModel = require('../models/trainer');

module.exports = function (req, res, next) {
  TrainerModel.find({}, function (err, results) {
    if (err) {
      res.send('Cannot connect to mongodb');
    } else {
      console.log(results);
      res.json(results);
    }
  });
  // res.send('respond with a resource');
}