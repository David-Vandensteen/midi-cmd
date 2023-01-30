import arg from 'arg';

const { log } = console;

export default class Params {
  constructor() {
    this.args = arg({
      '--out': String,
      '--cc': Number,
      '--value': Number,
      '--list': Boolean,
      '--version': Boolean,
      '--help': Boolean,

      // Aliases
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
    log('midi-send', '[options]');
    log('');
    log('     Required options:');
    log('');
    log('   -o    --out                 -- midi interface name');
    log('   -c    --cc                  -- cc controller');
    log('   -v    --value               -- value');
    log('');
    log('     Extra options:');
    log('');
    log('   --list     -l               -- show available midi out interfaces');
    log('   --version                   -- show version');
    log('   --help     -h               -- show help');
    process.exit(0);
  }

  get out() {
    return this.args['--out'];
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
