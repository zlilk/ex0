'use strict';

var events = require('events');
var md = require('./md1_hotel');
var http = require('http');
var config = require('./config').events;

http.createServer(function(req,res){
    res.writeHeader(200); //status code in header
    res.write(`success\n\n`); //response body

	var hotel1 = new md('Dan', 'hotel', 4); 	//first Hotel instance creation
	var hotel2 = new md('Bereshit', 'spa', 5);  //second Hotel instance creation

	//callbacks
	hotel1.on(config.REMOVE, hotel1.checkZero);
	hotel1.on(config.REMOVE, hotel1.displayData);
	hotel1.on(config.REMOVE, hotel1.displayStars);

	hotel1.on(config.ADD, hotel1.checkSeven);
	hotel1.on(config.ADD, hotel1.displayData);
	hotel1.on(config.ADD, hotel1.displayStars);

	hotel2.on(config.REMOVE, hotel2.checkZero);
	hotel2.on(config.REMOVE, hotel2.displayData);
	hotel2.on(config.REMOVE, hotel2.displayStars);

	hotel2.on(config.ADD, hotel2.checkSeven);
	hotel2.on(config.ADD, hotel2.displayData);
	hotel2.on(config.ADD, hotel2.displayStars);


	//user
	hotel1.reduceStars(3);
	hotel2.addStars(11);

	//puting the messages objects into string
	var str = "";

	hotel1.msg.forEach(function(data){
		str+=data;	
	});

	str+=`\n`;	

	hotel2.msg.forEach(function(data){
		str+=data;		
	});

	res.end(`${str}`); //printing the messages objects and close connection

}).listen(8080); //listen for connection on this port

console.log(`listening on port 8080`);



