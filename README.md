# midi-cmd

Command line utlity to send a midi control change message to a midi interface.
This can help with debugging or configuring a midi environment.

I provide a Windows (x64) binary which is instantly usable in releases section.

If you use the NodeJS dev project on Windows, you need to have the windows build tools.

***Not tested on OSX & Linux***

## Set Up
```cmd
npm i
```

## Usage
***Help:***
```
node src\index.js --help
```

***Available midi interfaces:***
```
node src\index.js --list
```

***example:***
Send a midi control change on midi interface 1 channel 73 with the value 64
```
node src\index.js -i 1 -c 73 -v 64
```

## Development
***lint***
```
npm run lint
```
***build a binary for Windows***
```
npm run package
```
