// Require Mongoose node module
const mongoose = require('mongoose');

const museumSchmea = new mongoose.Schema({
  name: String,
  city: String,
  country: String,
  img: String
});

module.exports = mongoose.model('Museum', museumSchmea);
