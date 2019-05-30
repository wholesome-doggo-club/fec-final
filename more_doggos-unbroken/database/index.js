const mongoose = require('mongoose');
const models = require('../database/models.js');
const files = require('../data/doggoData.json')
mongoose.connect('mongodb://localhost/moredoggos', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to DB'));
db.once('open', () => console.log('Connection to mongo successful'));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const save = (doggo) => {
  models.Doggo.create(doggo, (err, dog) => {
    if (err) console.log(err); else {
      console.log(dog, ' saved');
    }
  });
}

const getDoggos = (number, callback) => {
  models.Doggo.find({}).limit(number).exec((err, data) => {
    callback(data);
  })
}

const getADoggo = (callback) => {
  callback(files[getRandomInt(0,20)]);

}

module.exports = { save, getDoggos, getADoggo }