// Require mongoose node module
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_URL ||
  'mongodb://localhost:27017/mongoose-practice', { useNewUrlParser: true });

module.exports.Mueseum = require('./mueseum');
module.exports.Pieces = require('./pieces');
