var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

module.exports = function(app) {
	
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
	
}