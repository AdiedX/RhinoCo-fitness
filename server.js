

var express = require('express');
var logger = require('morgan');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/app'));
app.set('views', 'app/views');

// app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'html');
app.set('view cache', false);
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
    // app.use(express.static(path.join(config.root, 'app')));
    

if ('production' === env) {
	app.use('app/bower_components',  express.static(__dirname + '/bower_components'));
}
// app.use(express.static(__dirname + '/app/views'));

app.use(logger('dev'));

app.listen(process.env.PORT || 9000);

app.get('/', function(req, res){
	res.render('main');
});
