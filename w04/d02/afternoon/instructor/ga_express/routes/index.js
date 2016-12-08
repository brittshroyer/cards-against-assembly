var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/today/:degrees', function(req, res) {
  // Get degrees from the URL
  var degrees = req.params.degrees || 0;

  res.render('today', { degrees: degrees, name: 'Joe', zip: '78704' });
});

router.get('/today', function(req, res) {
  // res.send('It is 61 degrees today');

  // Called an api, and api says it's currently 87 degrees

  // Get degrees from the URL
  var degrees = req.query.degrees || 0;

  res.render('today', { degrees: degrees, name: 'Joe', zip: '78704' });
});

module.exports = router;
