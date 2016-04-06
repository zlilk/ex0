'use strict';

var events = require('events');

module.exports = class Hotel extends events {
	constructor(name, type, rank) {
		super();
		this.name = name;
		this.type = type;
		this.rank = rank;
		this.msg = new Array();
	}


	//prints hotel's data
	displayData() {
		var msg1 = (`Hotel name: ${this.name}`);
		console.log(`${msg1}`);
		var msg2 =(`Hotel type: ${this.type}`);
		console.log(`${msg2}`);
		this.msg.push(msg1);
		this.msg.push(`\n`);
		this.msg.push(msg2);
		this.msg.push(`\n`);
	}

	//prints hotel's stars rank
	displayStars() {
		var msg3 = (`Hotel rank: ${this.rank}`);
		console.log(`${msg3}`);
		this.msg.push(msg3);
		this.msg.push(`\n`);
	}

	//reducing stars in stars rank
	reduceStars(amount) {
		this.rank -= amount;
		this.emit('rankReduced'); //fire event
	}

	//adding stars in stars rank
	addStars(amount) {
		this.rank += amount;
		this.emit('rankGrowth'); //fire event
	}	

	//checks if stars rank is under zero
	checkZero() {
		if(this.rank<0) {
			this.rank = 0;
			var msg4 = (`Error! minimom star rank is zero`);
			console.log(`${msg4}`);
			this.msg.push(msg4);
			this.msg.push(`\n`);
		}
	}

	//checks if stars rank is above seven
	checkSeven() {
		if(this.rank>7) {
			this.rank = 7;
			var msg5 = (`Error! maximom star rank is seven`);
			console.log(`${msg5}`);
			this.msg.push(msg5);
			this.msg.push(`\n`);
		}
	}
}




