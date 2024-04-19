import fs from 'fs-extra';
import appRootPath from 'app-root-path';
import Params from '#src/lib/params';
import easymidi from 'easymidi';
import { monitor } from '#src/lib/monitor';
import { sender } from '#src/lib/sender';

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
  const availableIn = easymidi.getInputs();
  log('available midi in interfaces', availableIn);
  log('');
  const availableOut = easymidi.getOutputs();
  log('available midi out interfaces', availableOut);
  exit(0);
}

if (params.mode !== 'monitor' && params.mode !== 'send') {
  log('unknow mode', params.mode);
  Params.help();
}

if (params.mode === 'monitor' && params.i === undefined) Params.help();
if (params.mode === 'monitor') monitor(params.i);

if (params.mode === 'send') {
  if (
    params.mode === undefined
    || params.out === undefined
    || params.ch === undefined
    || params.cc === undefined
    || params.value === undefined
  ) Params.help();

  const {
    out,
    ch,
    cc,
    value,
  } = params;

  sender(out, ch, cc, value);
}
