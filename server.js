

var express = require('express');
var logger = require('morgan');

var app = express();

app.use(express.static(__dirname + '/'));

app.set('view engine', 'html');

app.use(logger('dev'));

app.listen(process.env.PORT || 9000);