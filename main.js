var express = require('express');
var app = express();
var http = require('http').createServer(app);
var bodyParser = require('body-parser');
var _ = require('underscore');

console.log("**** application is running ****");

app.set('ipaddr', '127.0.0.1');
app.set('port', 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/message', function (req, res) {
  var message = req.body.message;

  if (_.isUndefined(message) || message.trim() === '') {
    return res.json(400, { error: 'Bad request' });
  }

  res.json(200, { message: 'Success' });
});

http.listen(app.get('port'), app.get('ipaddr'));
