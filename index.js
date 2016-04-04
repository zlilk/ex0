var events = require('events');
var util = require('util');
var md = require('./md1');
var http = require('http');

http.createServer(function(req,res){
    res.writeHeader(200);
    res.write("success\n\n");

	var hotel1 = new md("Dan", "hotel", 4);
	var hotel2 = new md("Bereshit", "spa", 5);

	hotel1.on("rankReduced", hotel1.checkZero);
	hotel1.on("rankReduced", hotel1.displayData);
	hotel1.on("rankReduced", hotel1.displayStars);

	hotel1.on("rankGrowth", hotel1.checkSeven);
	hotel1.on("rankGrowth", hotel1.displayData);
	hotel1.on("rankGrowth", hotel1.displayStars);

	hotel2.on("rankReduced", hotel2.checkZero);
	hotel2.on("rankReduced", hotel2.displayData);
	hotel2.on("rankReduced", hotel2.displayStars);

	hotel2.on("rankGrowth", hotel2.checkSeven);
	hotel2.on("rankGrowth", hotel2.displayData);
	hotel2.on("rankGrowth", hotel2.displayStars);



	hotel1.reduceStars(3);
	hotel2.addStars(11);

	var str = "";

	hotel1.msg.forEach(function(data){
		str+=data;	
	});
	
	str+="\n";	

	hotel2.msg.forEach(function(data){
		str+=data;		
	});
	res.end(str);

}).listen(8080);

console.log('listening on port 8080');