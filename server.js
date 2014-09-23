

var express = require('express');
var logger = require('morgan');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'html');
app.set('view cache', false);

app.use(express.static(__dirname + '/app'));
// app.use(express.static(__dirname + '/app/views'));

app.use(logger('dev'));

app.listen(process.env.PORT || 9000);

app.get('/', function(req, res){
	res.render('main');
});
