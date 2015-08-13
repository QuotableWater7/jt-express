var express = require('express');
var app = express();
var http = require('http').createServer(app);
var bodyParser = require('body-parser');

app.set('ipaddr', '127.0.0.1');
app.set('port', 8000);
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Server up and runnin');
});

http.listen(app.get('port'), app.get('ipaddr'));
