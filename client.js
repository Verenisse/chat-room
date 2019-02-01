'use strict';
const net = require('net');

let newClient = net.connect(8080, 'localhost', () => {
	console.log('enter your username');

	process.stdin.on('data', data => {
		newClient.write(data);
	});

	newClient.on('data', data => {
		process.stout.write(data);
	});

});