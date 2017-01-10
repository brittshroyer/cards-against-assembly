var express = require('express');
var router = express.Router();
var TwitterClient = require('easy-twitter');
var twitter = new TwitterClient({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_KEY_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret : process.env.ACCESS_TOKEN_SECRET
});
var path = require('path');

router.post('/tweetmessage',function(req,res,next){
  // Add our message to codezillas twitter page
  twitter.tweet(req.body.tweet)
    .then(function(data){
      // Tweet was successfully posted!
      res.send('Tweet was successfully posted!');
    })
    .catch(function(error){
      console.error(error);
      res.send('no bueno senor');
    });

});

router.post('/tweetmedia',function(req,res,next){
  // Tweet a message with an image
  var message = req.body.tweet;
  var imgUrl =  path.join(__dirname,'../public/images/') + req.body.img;

  twitter.uploadMedia(message,imgUrl).then(function(data){
    // Tweet was successfully posted!
    res.send('Tweet-Media was successfully posted!');
  }).catch(function(error){
    // Error!
    console.error(error);
    res.send('There was an error with tweet-media!');
  });

});

module.exports = router;
