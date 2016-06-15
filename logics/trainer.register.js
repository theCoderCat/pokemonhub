var _ = require('lodash');
var TrainerModel = require('../models/trainer');
var PasswordHelper = require('../utils/password');

module.exports = function (req, res, next) {
  var trainerInfo = req.body;
  console.log(['trainer info: ', trainerInfo]);
  var p = PasswordHelper.hash(trainerInfo.password);
  console.log(['hashed password: ', p]);

  var newTrainer = new TrainerModel();

  newTrainer.trainername = trainerInfo.trainername;
  newTrainer.password = p;

  // check if trainer name is available
  var query = TrainerModel.findOne({
    trainername: trainerInfo.trainername
		});
  query.select('trainername password');

  query.exec(function (error, trainer) {
    if (error) {
      res.send('Something wrong has occured, try again later');
    } else {
      if (trainer) {
        res.send('trainername not available, choose another one');
      } else {
        newTrainer.save(function (err, newtrainer) {
          if (err) {
            console.log("Have err");
            console.log(err);
          } else {
            console.log("create trainer success");
            res.json(newtrainer);
            return;
          }
        });
      }
    }
  });

};