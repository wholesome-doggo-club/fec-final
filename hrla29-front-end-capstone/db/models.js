const mongoose = require('mongoose');
const navDB = require ('./index.js');

const citySchema = mongoose.Schema({
  cityName: String,
  cityState: String,
  stateAbv: String // states will be saved into the city database.
});

const zipSchema = mongoose.Schema({ // only contains zip codes.
  zipNum: Number,
  zipStateAbv: String
});

const City = mongoose.model('City', citySchema);
const Zip = mongoose.model('Zip', zipSchema);

module.exports = { City, Zip }