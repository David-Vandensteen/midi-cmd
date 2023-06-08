# midi-send
![](https://i.ibb.co/PgzmGP2/midiSend.png)

A command-line utility for sending MIDI control change messages to a MIDI interface.  
This tool can be useful for debugging or configuring a MIDI environment.  
  
A Windows (x64) binary is available in the releases section for immediate use.  
Note that this tool has not been tested on macOS or Linux.


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
To send a MIDI control change on MIDI interface name "myMidiOutName", channel 73, with the value 64:
```
node src\index.js -i myMidiOutName -c 73 -v 64
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
