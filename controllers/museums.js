// Require needed modules
const express = require('express');

// link database
const db = require('../models');

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  db.Museum.find()
    .then(museums => {
      console.log('museums return:', museums);
      res.render('museums/index', { museums });
    })
    .catch(err => {
      console.log('err retrieving museum:', err);
      res.send('err, please check log');
    });
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.send('STUB - NEW MUSEUM POST');
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  res.send('museums/show');
});

module.exports = router;
