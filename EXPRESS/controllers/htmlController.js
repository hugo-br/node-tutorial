var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
	
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

	
}