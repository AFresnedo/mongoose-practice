// Require mongoose node module
const mongoose = require('mongoose');

// WARN it MIGHT be case sensitive, we don't know
// NOTE database name is case sensitive, so probably wanted to do M...P..
mongoose.connect(process.env.MONGOOSE_URL ||
  'mongodb://localhost:27017/mongoose-practice', { useNewUrlParser: true });

// NOTE this allows us to do db.Museum, db.Piece
// NOTE the import, in above, is const db = require('...../models')
// NOTE module.exports is equivalent to whatever the require is saved as
module.exports.Museum = require('./museum');
module.exports.Piece = require('./piece');
