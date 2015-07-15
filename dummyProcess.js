// IMPORTS
const fs = require('fs'),
spawn = require('child_process').spawn;

spawn('notepad', [], {"detached":true});
process.exit();