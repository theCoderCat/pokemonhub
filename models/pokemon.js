var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  species:  String,
  ball: String,
  nature: String,
  ability: String,
  gender: String,
  iv_hp: Number,
  iv_atk: Number,
  iv_def: Number,
  iv_satk: Number,
  iv_sdef: Number,
  iv_spd: Number,
  ev_hp: Number,
  ev_atk: Number,
  ev_def: Number,
  ev_satk: Number,
  ev_sdef: Number,
  ev_spd: Number,
  ot: String,
  is_shiny: Boolean,
  is_egg: Boolean,
  esv: Number,
  owner: { type : Number, ref : 'Trainer' },
});

module.exports = mongoose.model('PokemonModel', userSchema);
