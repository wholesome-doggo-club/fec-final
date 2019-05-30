const mongoose = require('mongoose');

let doggoSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: String,
  gender: String,
  location: String,
  image: String
});

const doggoSchema2 = new mongoose.Schema({
  name: {
    type: String,
    allowNull: false
  },
  sex: {
    type: String,
    allowNull: false
  },
  location: {
    type: String,
    allowNull: false
  },
  breed: {
    type: String,
    allowNull: false
  },
  size: {
    type: String,
    allowNull: false
  },
  coatLength: {
    type: String,
    allowNull: false
  },
  vaccinations: {
    type: String,
    allowNull: false
  },
  goodInHomeWith: {
    type: String,
    allowNull: false
  },
  health: {
    type: String,
    allowNull: false
  },
  adoptionFee: {
    type: Number,
    allowNull: false
  },
  ageInWeeks: {
    type: Number,
    allowNull: false
  },
  description: {
    type: String,
    allowNull: false
  },
  shelter: {
    type: String,
    allowNull: false
  },
  shelterEmail: {
    type: String,
    allowNull: false
  }
});

let Doggo = mongoose.model('Doggo', doggoSchema);
const Doggo2 = mongoose.model('Doggo2', doggoSchema2);

module.exports = {Doggo, Doggo2};