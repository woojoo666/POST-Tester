var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', './');
app.set('view engine', 'jade');

// logger setup
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.render('index', { title: 'Norton Pay' });
});

app.post('/', function (req, res) {
	console.log("Got POST! Request data:");
	console.log(req.body);
	res.send({message: 'Message received!'});
});

app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), "0.0.0.0", function() {
	console.log('listening on port ' + server.address().port);
});
