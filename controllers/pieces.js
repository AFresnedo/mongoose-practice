// Require needed modules
const express = require('express');

// grab models
const db = require('../models');

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  res.render('pieces/index');
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
