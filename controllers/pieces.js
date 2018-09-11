// Require needed modules
const express = require('express');

// grab models
const db = require('../models');

// Declare router
const router = express.Router();

// NOTE: populate to provide model.referencedModel.field access
// NOTE: lookup populate to see what you can do with it (function inside?)
router.get('/', (req, res) => {
  db.Piece.find()
    .populate('museum')
    .then(pieces => {
      res.render('pieces/index', { pieces });
    })
    .catch(err => {
      console.log(err);
      res.render('error');
    });
});

router.post('/', (req, res) => {
  db.Piece.create(req.body)
    .then(() => {
      res.redirect('/pieces');
    })
    .catch(err => {
      console.log('err creating piece:', err);
      res.send('err creating piece, check log');
    });
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  res.render('pieces/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  res.send('pieces/show');
});

module.exports = router;
