// IMPORTS
const fs = require('fs'),
spawn = require('child_process').spawn;

var dummy = spawn('notepad', []);

dummy.on('close', function(){
	console.dir("Oh noes! I have been closed!");
});
