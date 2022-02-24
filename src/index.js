import fs from 'fs-extra';
import appRootPath from 'app-root-path';
import Params from '#src/lib/params';
import MidiKey from '#src/lib/midikeyout';

const { readJSONSync } = fs;
const { resolve } = appRootPath;
const { log } = console;
const { exit } = process;

const params = new Params();
const midiKey = new MidiKey();

if (params.help) Params.help();

if (params.version) {
  const { version } = readJSONSync(resolve('./package.json'));
  log(version);
  exit(0);
}

if (params.list) {
  const availableInt = midiKey.getAvailableInterfacesName();
  const displayInt = [];

  let id = -1;
  availableInt.map((int) => {
    id += 1;
    return displayInt.push(`${id} ${int}`);
  });

  log(displayInt.join('\n'));
  exit(0);
}

if (
  params.id === undefined
  || params.cc === undefined
  || params.value === undefined
) Params.help();

midiKey.register({ portId: params.id })
  .sendCCMessage({ cc: params.cc, value: params.value })
  .stop();
