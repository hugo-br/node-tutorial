// angular app

var app = angular.module('testApp', []);

app.controller('myCtrlb', allo);

function allo(){
	this.message = "allo";
	
	this.people = clientPeople;
}