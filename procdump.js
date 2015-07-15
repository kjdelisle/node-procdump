/* procdump.js
* Use a provided name to find a process and return a core dump.
* Please note this hasn't been written to be particularly robust;
* it's missing the exception handling, and input safety I would
* usually add to a program of this nature.
* This program is not meant for non-Windows environments!
*/

// IMPORTS
const fs = require('fs'),
spawn = require('child_process').spawn,
windows = require('node-windows');

windows.isAdminUser(function(isAdmin){
	if (!isAdmin){
		console.dir('You need to run this command with administrative privileges!');
		return;
	}
	else {
		dump();	
	}
});

function dump(){
	var args = process.argv.slice(2, process.argv.length), //Get subset of args (don't want the name).
	output = '',
	procDump = spawn('procdump', args);
	
	procDump.stdout.on('data', function(outTxt){
		output += outTxt.toString();
	});
	
	procDump.on('close', function(){
		console.dir(output);
		process.exit();
	});
}