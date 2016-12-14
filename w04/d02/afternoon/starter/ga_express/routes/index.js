var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/today/:degrees', function(req, res){
  // res.send("It is 61 degrees today");

  var degrees = req.params.degrees || 0;

  res.render('today', { degrees: degrees, });

});


router.get('/today', function(req, res){
  // res.send("It is 61 degrees today");

  var degrees = req.query.degrees || 0;

  res.render('today', { degrees: degrees, });
});

router.get('/funfact', function(req, res){
  res.render('funfact');
});


module.exports = router;
