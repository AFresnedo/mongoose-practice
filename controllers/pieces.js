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
  db.Piece.create({
    name: req.body.name,
    img: req.body.img,
    museum: req.body.museum,
    creator: {
      firstName: req.body.creator_firstName,
      lastName: req.body.creator_lastName,
      img: req.body.creator_img,
      birthYear: req.body.creator_birthYear,
      deathYear: req.body.creator_deathYear
    }
  })
    .then(result => {
      res.redirect(`/pieces/${result.id}`);
    })
    .catch(err => {
      console.log('err creating piece:', err);
      res.send('err creating piece, check log');
    });
});

router.get('/new', (req, res) => {
  db.Museum.find()
    .then(museums => {
      res.render('pieces/new', { museums });
    })
    .catch(err => {
      console.log('err in pieces/new route:', err);
      res.render('error');
    });
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  res.send('pieces/show');
});

module.exports = router;
