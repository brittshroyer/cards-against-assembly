var express = require('express');
var router = express.Router();
var Dog = require('../models/dog');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GA Pets' });
});

router.get('/dogs/:dogId', function(req, res) {
  Dog.findById(req.params.dogId, function(err, result) {
    if (err) console.log(err);

    res.send('Hi, my name is: ' + result.name);
  });
});

router.get('/dogs', function(req, res) {
  var searchOptions = {};

  // breed
  // req.query.breed
  if (req.query.breed) {
    searchOptions = {
      breed: req.query.breed
    }
  }

  Dog.find(searchOptions, '', function(err, results) {
    if (err) console.log(err);

    console.log(results);

    res.render('dogs', {
      dogdog: results
    });
  });
});

module.exports = router;
