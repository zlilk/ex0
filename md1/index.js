var events = require('events');
var util = require('util');
util.inherits(Hotel, events.EventEmitter);


function Hotel(name, type, rank) {
	this.name = name;
	this.type = type;
	this.rank = rank;
	this.msg = [""];
	events.EventEmitter.call(this);
}

Hotel.prototype.displayData = function() {
	var msg1 = ("Hotel name: " + this.name);
	console.log(msg1);
	var msg2 =("Hotel type: " + this.type);
	console.log(msg2);
	this.msg.push(msg1);
	this.msg.push("\n");
	this.msg.push(msg2);
	this.msg.push("\n");

};

Hotel.prototype.displayStars = function() {
	var msg3 = ("Hotel rank: " + this.rank);
	console.log(msg3);
	this.msg.push(msg3);
	this.msg.push("\n");
};

Hotel.prototype.reduceStars = function(amount) {
	this.rank -= amount;
	this.emit('rankReduced');
};

Hotel.prototype.addStars = function(amount) {
	this.rank += amount;
	this.emit('rankGrowth');
};

Hotel.prototype.checkZero = function() {
	if(this.rank<0) {
		this.rank = 0;
		var msg4 = ("Error! minimom star rank is zero");
		console.log(msg4);
		this.msg.push(msg4);
		this.msg.push("\n");
	}
};

Hotel.prototype.checkSeven = function() {
	if(this.rank>7) {
		this.rank = 7;
		var msg5 = ("Error! maximom star rank is seven");
		console.log(msg5);
		this.msg.push(msg5);
		this.msg.push("\n");
	}
};


module.exports = Hotel;

