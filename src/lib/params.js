import arg from 'arg';

const { log } = console;

export default class Params {
  constructor() {
    this.args = arg({
      '--mode': String,
      '--out': String,
      '-i': String,
      '--ch': Number,
      '--cc': Number,
      '--value': Number,
      '--list': Boolean,
      '--version': Boolean,
      '--help': Boolean,

      // Aliases
      '-m': '--mode',
      '-o': '--out',
      '-c': '--cc',
      '-v': '--value',
      '-l': '--list',
      '-h': '--help',
    });
    if (process.argv.length <= 1) Params.help();
  }

  // TODO : read name in package.json

  static help() {
    log('');
    log('');
    log('midi-cmd', '[options]');
    log('');
    log('     Required options:');
    log('');
    log('     -m     --mode      -- monitor or send');
    log('');
    log('     Send mode required options:');
    log('');
    log('     -o    --out                 -- midi interface name');
    log('           --ch                  -- channel');
    log('     -c    --cc                  -- cc controller');
    log('     -v    --value               -- value');
    log('');
    log('     Monitor mode required options:');
    log('');
    log('     -i                          -- midi interface name');
    log('');
    log('     Extra options:');
    log('');
    log('     --list     -l               -- show available midi interfaces');
    log('     --version                   -- show version');
    log('     --help     -h               -- show help');
    process.exit(0);
  }

  get mode() {
    return this.args['--mode'];
  }

  get i() {
    return this.args['-i'];
  }

  get out() {
    return this.args['--out'];
  }

  get ch() {
    if (this.args['--ch'] < 0) return 0;
    if (this.args['--ch'] > 15) return 15;
    return this.args['--ch'];
  }

  get cc() {
    if (this.args['--cc'] < 0) return 0;
    if (this.args['--cc'] > 127) return 127;
    return this.args['--cc'];
  }

  get value() {
    if (this.args['--value'] < 0) return 0;
    if (this.args['--value'] > 127) return 127;
    return this.args['--value'];
  }

  get list() {
    return this.args['--list'];
  }

  get version() {
    return this.args['--version'];
  }

  get help() {
    return this.args['--help'];
  }
}
