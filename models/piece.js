// Require Mongoose node module
const mongoose = require('mongoose');

const creatorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  img: String,
  birthYear: { type: Date },
  deathYear: { type: Date }
});

// HINT: include a creator field for using the Creator schema
const pieceSchema = new mongoose.Schema({
  name: String,
  img: String,
  creator: creatorSchema,
  museum: { type: mongoose.Schema.Types.ObjectId, ref: 'Mueseum' }
});

module.exports = mongoose.model('Piece', pieceSchema);

// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
