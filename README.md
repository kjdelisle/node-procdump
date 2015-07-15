# node-procdump
A thin-wrapper on Sysinternals' "procdump" utility.

## Overview

procdump.js is a thin wrapper on the procdump.exe utility used by Sysinternals. You can pass any of the valid parameters that the exe would accept into this
wrapper using node at the command line. Please note that this program was made with ES6 keywords, and will require the --harmony tag to run.

### Examples

```
node --harmony notepad -ma -r -a testDump.dmp
```
This will generate a complete memory dump of the notepad process to the running directory, named testDump.dmp,
and will attempt to do so by cloning the process and capturing the dump concurrently (to avoid blocking 
the process' normal operation).

For a complete list of valid procdump commands, please visit:
https://technet.microsoft.com/en-us/sysinternals/dd996900.aspx