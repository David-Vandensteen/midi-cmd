import fs from 'fs-extra';
import appRootPath from 'app-root-path';
import Params from '#src/lib/params';
import easymidi from 'easymidi';

const { readJSONSync } = fs;
const { resolve } = appRootPath;
const { log } = console;
const { exit } = process;

const params = new Params();

if (params.help) Params.help();

if (params.version) {
  const { version } = readJSONSync(resolve('./package.json'));
  log(version);
  exit(0);
}

if (params.list) {
  const availableInt = easymidi.getOutputs();
  log('available midi out interfaces', availableInt);
  exit(0);
}

if (
  params.out === undefined
  || params.cc === undefined
  || params.value === undefined
) Params.help();

const midiOut = new easymidi.Output(params.out);
midiOut.send('cc', {
  controller: params.cc,
  value: params.value,
});
