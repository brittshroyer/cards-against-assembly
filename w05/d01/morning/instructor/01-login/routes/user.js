var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

/* GET user profile. */
router.get('/', ensureLoggedIn, function(req, res, next) {
  req.session.viewCount = req.session.viewCount || 0;
  req.session.viewCount++;

  res.render('user', { user: req.user, viewCount: req.session.viewCount });
});

router.get('/nonprotected', function(req, res, next) {
  res.render('user', { user: req.user });
});


module.exports = router;
