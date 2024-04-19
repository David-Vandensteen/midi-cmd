import easymidi from 'easymidi';

const { log } = console;

const monitor = (interfaceName) => {
  const input = new easymidi.Input(interfaceName);
  log('listening', interfaceName);

  input.on('noteon', (message) => {
    log('noteon', message);
  });

  input.on('noteoff', (message) => {
    log('noteoff', message);
  });

  input.on('cc', (message) => {
    log('cc', message);
  });
};

export default monitor;
export { monitor };
