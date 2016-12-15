# WebSockets with Socket.IO

## Web Basics Recap

Let's take it back to unit 1 and talk about how the web works. In very simple terms: you have a client - a program that can make requests to the web - and a server - a computer somewhere that holds information/code. When you want some information, your browser sends a request to get some data and then the server responds. This can be with a GET request or an AJAX request, but in essence, the client is always saying "give me some data".

#### What are the issues with this?

Well, the client is in 'control' - the server might have updates, but the client doesn't know about them - and the client has to request information it may not be familiar with.

Alas! In comes polling! The client can keep 'polling' the server to see if it has any more data.

#### What are the issues with polling?

It's slow! Polling every `n` seconds isn't ideal, and if you poll too often, your bandwidth will go through the roof and slow your application down.

### Enter WebSockets

WebSockets solves all this. It maintains an open connection from Server <-> Client that we can use to 'push' information and get information, constantly, like push notifications on your phone (Gmail through Mail.app example).

WebSockets allow a long-held single TCP socket connection to be established between the client and server which allows for bi-directional, full duplex, messages to be instantly distributed with little overhead resulting in a very low latency connection.

Both the WebSocket API and the WebSocket protocol are standardised which means the web now has an agreed standard for realtime communication between Internet clients and servers. Originally considered a browser technology, WebSockets are reaching far beyond just web browsers and are becoming a cross platform standard for realtime communication between client and server. 

- The standards first approach means that we can finally create functionality that works consistently across multiple platforms
- Connection limitations are no longer a problem since WebSockets represent a single TCP socket connection
- Cross domain communication has been considered from day one and is dealt with within the connection handshake

Unlike HTTP requests, once a connection is established with WebSockets, you don't get continuous meta data like types, user-agents, cookies, dates, etc.

> One of the main advantages of WebSockets for the server, is that it is not a HTTP request (after handshake), but proper message based communication protocol. That allows you to achieve huge performance and architecture advantages. For example in node.js you can share the same memory for different socket connections, so that way they can access shared variables. So you don't need to use a database as exchange point in the middle (like with AJAX or Long Polling and for example PHP). You can store data in RAM, or even republish between sockets straight away.

### Comparison

* **AJAX** - request → response. Creates connection to server, sends request headers with optional data, gets response from server, closes connection. Supported in all major browsers.

* **Long poll** - request → wait → response. Creates connection to server like AJAX does, but keep-alive connection open for some time (not long though), during connection open client can receive data from server. Client have to reconnect periodically after connection is closed due to timeouts or data eof. On server side it is still treated like HTTP request same as AJAX, except the answer on request will happen now or some time in the future defined by application logic. Supported in all major browsers.

* **WebSockets** - client ↔ server. Create TCP connection to server, and keep it as long as needed. Server or client can easily close it. Client goes through HTTP compatible handshake process, if it succeeds, then server and client can exchange data both directions at any time. It is very efficient if application requires frequent data exchange in both ways. WebSockets do have data framing that includes masking for each message sent from client to server so data is simply encrypted.

> Diagram on the white board the traditional request/response cycle, and how websockets are different

## WebSockets in Action

> Question: What kind of practical application do you think there is for websockets? Can you think of any kind of apps out there? Some examples might include a chatroom, stock ticker, etc

We don't need to go far to see WebSockets in action, let's take a look at the hottest app out there right now - [PackStack](https://packstack.co). Whenever users upload a photo to a group stack, the photo instantly appears on the live feed on the TV or projector that's displaying that feed. 

[WDI on PackStack](http://packstack.co/cast/55db64ea6b0931011c000123)

<img src="https://raw.githubusercontent.com/mdang/resources/master/node/websockets/livestack.png">

When a new photo is added, a modal appears showcasing the new photo instantly without a page refresh. 

<img src="https://raw.githubusercontent.com/mdang/resources/master/node/websockets/lightbox.png">

## WebSockets with Socket.IO - Codealong

Today we're going to create an application that will pull a constant stream of tweets from Twitter's API for any search term. 

### Initial setup

First thing we need to do is set up a new Express application. Somewhere in your code folder, initialize a new Express application: 

```
$ express -e twit_io
```

``` 
$ cd twit_io
```

Don't forget, with any new Express application the first thing we do is install any dependencies. 

```
$ npm install
```

Aside from the core dependencies, one thing we'll need to install also is the [socket.io](http://socket.io) package.

```bash
npm install socket.io --save
```

Then, require it in our app in the `bin/www` file.

Under the `server.on('listening', onListening);` add:

```javascript
// bin/www
var io = require('socket.io')(server);
```

## Add the Twitter Streaming API

Great! We're also going to be using another module called [twit](https://github.com/ttezel/twit) to use with the Twitter Streaming API.

```bash
npm install twit --save
```

And add to your `bin/www` at the top:

```javascript
// bin/www
var Twit = require('twit');
```

Now you can either use your own twitter accounts or create fake ones for this purpose.

###  Setting up our client Twitter app

Just like when we did OAuth, to make any of our apps work with Twitter/Facebook, we need to declare our app as a Twitter application using [apps.twitter.com](https://apps.twitter.com).

Let's go to [Twitter](https://apps.twitter.com) and create a new 'app':

- **Name:** my-twit-io-app-name (must be unique)
- **Description:** Small app to stream tweets from Twitter.
- **Website:** http://127.0.1.1

You'll have to navigate to **Keys and Access Tokens** and copy the keys, generate **My Access Token** and instantiate a new Twit object.

Then we'll add our new keys to ~/.bash_profile:

```bash
export TWITTER_CONSUMER_KEY=''
export TWITTER_CONSUMER_SECRET=''
export TWITTER_ACCESS_TOKEN=''
export TWITTER_ACCESS_TOKEN_SECRET=''
```

And remember to source:

```bash
source ~/.bash_profile
```

## Set up your Twitter app - Independent Practice

Try it on your own - head to [apps.twitter.com](https://apps.twitter.com) and set up your application; don't forget to add your keys to `~/.bash_profile`.

## Instantiate new Twitter - Codealong

In JS to access any environment variables, we can use:

```
process.env.VARIABLE
```

Create new Twit client in  `bin/www`:

```javascript
// bin/www
var twitter = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
```

You can console log this to see if it has worked:

```javascript
console.log(twitter);
```

### Get Tweets

Now we connect to the Twitter Streaming API, using the twit module, get all the statuses (or tweets) and filter them on our keyword.

```javascript
// bin/www
var stream = twitter.stream('statuses/filter', { track: 'javascript' });
```

### Server-side Websocket

Now we set up our websocket on the server-side. There are a number of reserved words - connect, connection, message, disconnect - that can't be used elsewhere. We want our tweets to stream when we connect to the page so we open a _connect_ channel.

Inside, we set up our tweet socket and finally we _emit_ our _tweet_ on the _tweets_ channel.

```javascript
// bin/www
io.on('connect', function(socket) {
  stream.on('tweet', function(tweet) {
    socket.emit('tweets', tweet);
  });
});
```

### Client Side

Now that's the server side sorted, now let's do the client. Open up our `index.ejs` and add two things - first thing is to include our socket.io library in the header:

```html
 <script type="text/javascript" src="/socket.io/socket.io.js"></script>
```

Notice that the path is relative - that's being done for you by Node.

### Let's check in Chrome's console

Open up Chrome's console using `cmd+alt+j`

```
> io
< function lookup(uri,opts){if(typeof uri=="object"){opts=uri;uri=undefined}opts=opts||{};var parsed=url(uri);var source=parsed.source;var id=parsed.id;var io;if(opts.forceNew||opts["force new connection"]||false===opts.multiplex){debug("ignoring socket cache for %s",source);io=Manager(source,opts)}else{if(!cache[id]){debug("new io instance for %s",source);cache[id]=Manager(source,opts)}io=cache[id]}return io.socket(parsed.path)}
```

Then in `index.ejs` add in our receiving code below `body`:

```html
<script type="text/javascript">
  var socket = io();

  socket.on('connect', function() {
    console.log('Connected!');
  });

  socket.on('tweets', function(tweet) {
    console.log(tweet);
  });
</script>
```

We use one of the reserved events ('connect') to log out the fact we are connected, and then, we hook up to the _tweets_ channel and start logging out what is received.

This is great! We now have own tweets streaming but only to the console. Let's get it on the page with some jQuery.

### Back to the server-side

Go back to our `bin/www` and tidy up the tweet data we're sending through:

```javascript
stream.on('tweet', function (tweet) {
var data = {};
  data.name = tweet.user.name;
  data.screen_name = tweet.user.screen_name;
  data.text = tweet.text;
  data.user_profile_image = tweet.user.profile_image_url;
  socket.emit('tweets', data);
});
```

Note the change to: `socket.emit('tweets', data);`

### Let's change the views

Now we can add this using jQuery. Append vs Prepend.

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.js"></script>
```

Add a container:

```html
<div id="tweet-container"></div>
```

Render the tweets with jQuery and amend the script tag in `index.ejs`:

```html
<script type="text/javascript">
  var socket = io();

  socket.on('connect', function() {
    console.log('Connected!');
  });

  socket.on('tweets', function(tweet) {
    var html = '<div class="row"><div class="col-md-6 col-md-offset-3 tweet"><img src="' + tweet.user_profile_image + '" class="avatar pull-left"/><div class="names"><span class="full-name">' + tweet.name + ' </span><span class="username">@' +tweet.screen_name + '</span></div><div class="contents"><span class="text">' + tweet.text + '</span></div></div></div>';
    $('#tweet-container').prepend(html);
  });
</script>
```

## Final

```js
// bin/www
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('twit_io:server');
var http = require('http');
var Twit = require('twit');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// Socket.IO
var io = require('socket.io')(server);

var twitter = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var stream = twitter.stream('statuses/filter', { track: 'javascript' });

io.on('connect', function(socket) {
  stream.on('tweet', function (tweet) {
    var data = {};
    data.name = tweet.user.name;
    data.screen_name = tweet.user.screen_name;
    data.text = tweet.text;
    data.user_profile_image = tweet.user.profile_image_url;
    socket.emit('tweet_received', data);
  });
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
```

```html
<!-- index.ejs -->
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>

    <ul id="tweets"></ul>

    <script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="/socket.io/socket.io.js"></script>
    <script type="text/javascript">
      var socket = io();
      socket.on('connect', function() {
        console.log('Connected!');
      });
      socket.on('tweet_received', function(tweet) {
        console.log(tweet);
        var $li = $('<li />');
        $li.text(tweet.text);
        $('#tweets').prepend($li);
      });
    </script>
  </body>
</html>
```
