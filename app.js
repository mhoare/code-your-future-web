var express = require('express');
var app = express();
var routes = require('./config/routes');
var path = require('path');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));

var layouts = require('handlebars-layouts');
app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(port, function() {
  console.log("App listening on port 3000, cap'n.")
})