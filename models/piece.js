// Require Mongoose node module
const mongoose = require('mongoose');

const creatorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  img: String,
  birthYear: Number,
  deathYear: Number
});

/* NOTE in sql you can join on anything you want, so in mongo you can create
 * a reference on whenever you want (not just ObjectId) because its equivalent
 * functionality (not equivalent but don't be literal) */
// HINT: include a creator field for using the Creator schema
const pieceSchema = new mongoose.Schema({
  name: String,
  img: String,
  creator: creatorSchema,
  museum: { type: mongoose.Schema.Types.ObjectId, ref: 'Mueseum' }
});

module.exports = mongoose.model('Piece', pieceSchema);

// WARN: your idea of deleting fields to "temporarily hide" information does
// not work because the values are lost as soon as the fields are deleted

// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
