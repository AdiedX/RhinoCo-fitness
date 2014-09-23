

var express = require('express');
var logger = require('morgan');

var app = express();

app.use(express.static(__dirname + '/app/views'));

app.set('view engine', 'html');

app.use(logger('dev'));

app.listen(process.env.PORT || 9000);

app.get('/', function(req, res){
	res.render('index');
});
