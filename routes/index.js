var express = require('express');
var router = express.Router();

const Eatery = require('../models/eatery');

router.get('/', function(req, res, next) {
  const eateries = Eatery.getAll();
  res.render('eateries/index', { title: 'Employee FAQs', eateries });
});

module.exports = router;
