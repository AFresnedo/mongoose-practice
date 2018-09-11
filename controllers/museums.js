// Require needed modules
const express = require('express');

// link database
const db = require('../models');

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  /* NOTE: design note, Brandi likes doing index first (even if no data)
   * because it forces you, as a developer, to handle situation where no
   * results are returned (and that is the correct return) */
  db.Museum.find()
    .then(museums => {
      console.log('museums return:', museums);
      res.render('museums/index', { museums });
    })
    .catch(err => {
      console.log('err retrieving museum:', err);
      res.render('error');
    });
});

router.post('/', (req, res) => {
  db.Museum.create(req.body)
    .then(result => {
      res.redirect(`/museums/${result.id}`);
    })
    .catch(err => {
      console.log('problem creating museum:', err);
      // TODO if you are going to redirect, must have flash here
      res.redirect('/museums/new');
    });
});

router.get('/new', (req, res) => {
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  db.Museum.findById(req.params.id)
    .then(museum => {
      res.render('museums/show', { museum });
    })
    .catch(err => {
      console.log('err getting museum show page:', err);
      res.render('error');
    });
});

module.exports = router;
