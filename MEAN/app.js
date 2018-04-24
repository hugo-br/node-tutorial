var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

var people = [
	  {name: 'Rick James'}, {name: 'Rick Ross'}, {name: 'Joe Does'}, {name: 'James Does'}, {name: 'Mickey Mouse'}, {name: 'Alba'}
	];

app.get('/', function(req, res) {
	res.render('index', {severPeople: people});
});

app.listen(port);