import easymidi from 'easymidi';

const sender = (out, channel, controller, value) => {
  const midiOut = new easymidi.Output(out);
  midiOut.send('cc', {
    channel,
    controller,
    value,
  });
};

export default sender;
export { sender };
