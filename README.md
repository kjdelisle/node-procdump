# node-procdump
A thin-wrapper on Sysinternals' "procdump" utility.

## Overview

procdump.js is a thin wrapper on the procdump.exe utility made by Sysinternals. You can pass any of the valid parameters that the exe would accept into this
wrapper using node at the command line. Please note that this program was made with ES6 keywords, and will require the --harmony tag to run.

**IMPORTANT**: This program was designed exclusively for the Windows operating system, and was not tested with any variant of Linux, or with Mac OS X.

### Examples


#### Generate a dump file of some existing process.
```
node --harmony notepad -accepteula -ma -r -a testDump.dmp
```
This will generate a complete memory dump of the notepad process to the running directory, named testDump.dmp,
and will attempt to do so by cloning the process and capturing the dump concurrently (to avoid blocking 
the process' normal operation).
(The -accepteula flag is required to prevent the process from halting and presenting the EULA for Sysinternals. If you would prefer
to read and agree to it, you can omit this flag.)

#### Run a test process to kill
This repository comes with a dummyProcess.js file that you can run with node to spawn a copy of notepad for testing purposes.
Simply run it with:
```
node --harmony dummyProcess.js
```

For a complete list of valid procdump commands, please visit:
https://technet.microsoft.com/en-us/sysinternals/dd996900.aspx


#### Visual Studio Code
If you're using Visual Studio Code as your editor, there's an included .settings directory with a launch.json configuration file
that comes set with some defaults for ease of debugging. You can make changes to the args section to change your in-editor runs.

```
//Stuff up here
"args":["notepad","-accepteula","-ma", "-r", "-a", "testDump.dmp"],
//etc...
```
