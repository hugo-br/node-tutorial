var express = require('express');
var app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 5000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	
	var con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "b****4",
		database: "test"
	});
	
//	con.query('SELECT People.ID, Firstname, Lastname, Address FROM People INNER JOIN PersonAddresses ON People.ID = PersonAddresses.PersonID INNER JOIN Addresses ON PersonAddresses.AddressID = Addresses.ID',
   con.query('SELECT People.ID, Firstname, Lastname, Address FROM People',	
	function(err, rows) {
			if(err) throw err;
			console.log(rows[0].Lastname);
			
			// loop 
			for (let row of rows) {
 			  console.log(row.Firstname);
			  console.log(row.Lastname);
			  console.log(row.Address);
			}

		}
	);
	
	next();
});

htmlController(app);

apiController(app);

app.listen(port);