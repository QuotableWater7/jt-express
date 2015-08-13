var express = require('express');
var app = express();
var http = require('http').createServer(app);
var bodyParser = require('body-parser');

console.log("**** application is running ****");

app.set('ipaddr', '127.0.0.1');
app.set('port', 8000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('index');
});

http.listen(app.get('port'), app.get('ipaddr'));
