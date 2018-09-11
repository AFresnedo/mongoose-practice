// Require mongoose node module
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_URL ||
  'mongodb://localhost:27017/mongoose-practice', { useNewUrlParser: true });

module.exports.Museum = require('./museum');
module.exports.Pieces = require('./piece');
