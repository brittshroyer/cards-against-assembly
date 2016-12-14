var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', env: env });
});

router.get('/dashboard',ensureLoggedIn,function(req,res,next){
  console.log(req.user);
  if(req.user.id !== 'google-oauth2|115713714545107762908'){
    res.redirect('/');
  } else {
    res.render('dashboard',{ user: req.user});
  }
});


router.get('/login',
  function(req, res){
    res.render('login', { env: env });
  });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/dashboard');
  });


module.exports = router;
