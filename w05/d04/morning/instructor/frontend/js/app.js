$(function() {
  var socket = io('http://localhost:3000/');

  socket.on('connect', function() {
    console.log('Connected!');
  });

  socket.on('broadcast_tweet', function(tweet) {
    var html = [
      '<div class="row">',
        '<div class="col-md-6 col-md-offset-3 tweet">',
          '<img src="', tweet.user.profile_image_url ,'" class="avatar pull-left"/>',
          '<div class="names">',
            '<span class="full-name">', tweet.user.name ,'</span>',
            '<span class="username">@', tweet.user.screen_name ,'</span>',
          '</div>',
          '<div class="contents">',
            '<span class="text">', tweet.text ,'</span>',
          '</div>',
        '</div>',
      '</div>'
    ].join('');

    $('#tweet-container').prepend(html);
  });
});
