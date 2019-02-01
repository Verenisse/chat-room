'use strict';

const server = require('net').createServer();
//console.log(server);
const {StringDecoder} = require('string_decoder');
const decoder = new StringDecoder ('utf8');

server.on('connection', socket =>{
    console.log('client connected');
    let username = false;
    console.log(socket);


socket.on('data', data => {
	let msg = decoder.write(data).trim();
	if(!username) {
		username = msg;
		process.stdout.write(`${username} joined\n`);
	} else {
		process.stdout.write(`${username} says: ${msg}\n`);
	}

	if (msg ==='logout') {
		socket.end();
	}
	//console.log(decoder.write(data));
});

socket.on('end', () => {
	console.log('bye');
});
});
server.listen(8080, () => {
	console.log(`Server listening on port ${8080}`);
});