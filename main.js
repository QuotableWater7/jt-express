var express = require('express');
var hbs = require('hbs');
var app = express();

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/blah', function (req, res) {
  res.end('You are blah-ing');
});

app.listen(8000);
