var express = require('express');
//var bodyParser = require('body-parser')
var port = process.env.PORT || 5000;

var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

// create application/x-www-form-urlencoded parser
 //var urlencodedParser = bodyParser.urlencoded({ extended: false });

// for parsing json values
 //var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));
// ex : http://localhost:5000/assets/style.css

// set up ejs, by default views folder
app.set('view engine', 'ejs');


/*
// https://expressjs.com/en/resources/middleware.html
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next(); // keep on going
});

app.get('/', function(req, res) {
	// res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head><body><h1>Hello world!</h1></body></html>');
	res.render('index', {message : 'The index page'});
});

app.get('/', function(req, res) {
	res.send('<html><head><body><h1>Hello World!</h1></body></head></html>');
});

app.get('/api', function(req, res) {
	res.json({
		firstname : 'John', 
		lastname : 'Wayne'	
	})
});


// routing patter matching (:)
// https://expressjs.com/en/guide/routing.html
app.get('/person/:id', function(req, res) {
	let id = req.params.id;
	let q = req.query.qstr || 0;
	// res.send('<html><head><body><h1>Hello Person with id:' + id + '</h1></body></head></html>');
	res.render('people', {id : id, query: q})
});

// post
app.post('/person', urlencodedParser, function(req, res) {
    res.send('thank you');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

// json post 
app.post('/personjson', jsonParser, function(req, res) {
    res.send('thank you for the json data');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});
*/

// via controllers
apiController(app);
htmlController(app);


app.listen(port);