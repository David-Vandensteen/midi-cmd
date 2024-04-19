# midi-cmd

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
npm start -- --help
```

***Available midi interfaces:***
```
npm start -- --list
```

***example:***  
To send a MIDI control change on MIDI interface name "myMidiOutName", channel 0, controller 10 with the value 64:
```
npm start -- -o myMidiOutName --ch 0 -c 10 -v 64
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
