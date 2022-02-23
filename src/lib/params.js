import arg from 'arg';

const { log } = console;

class Params {
  constructor() {
    this.args = arg({
      '--id': Number,
      '--cc': Number,
      '--value': Number,
      '--list': Boolean,

      // Aliases
      '-i': '--id',
      '-c': '--cc',
      '-v': '--value',
      '-l': '--list',
    });

    if (process.argv.length <= 1) Params.help();
  }

  static help() {
    log('');
    log('');
    log('CMD', '[options]');
    log('');
    log('     Required options:');
    log('');
    log('   -i    --id                  -- midi interface id');
    log('   -c    --cc                  -- cc channel');
    log('   -v    --value               -- value');
    log('');
    log('     Extra options:');
    log('');
    log('   --list     -l               -- show available midi interface');
    log('   --help     -h               -- show help');
    process.exit(0);
  }

  get id() {
    return this.args['--id'];
  }

  get cc() {
    if (this.args['--cc'] < 0) return 0;
    if (this.args['--cc'] > 128) return 128;
    return this.args['--cc'];
  }

  get value() {
    if (this.args['--value'] < 0) return 0;
    if (this.args['--value'] > 128) return 128;
    return this.args['--value'];
  }

  get list() {
    return this.args['--list'];
  }
}

export default new Params();
