import midi from 'midi';

const { log } = console;

export default class MidiKeyOut extends midi.output {
  getAvailableInterfacesName() {
    const maxPort = this.getPortCount();
    const availablePorts = [];
    for (let i = 0; i < maxPort; i += 1) availablePorts.push(this.getPortName(i));
    return availablePorts;
  }

  getInterfaceIdByName(name) {
    const maxPort = this.getPortCount();
    for (let i = 0; i < maxPort; i += 1) {
      if (this.getPortName(i) === name) return i;
    }
    return null;
  }

  register({ portId }) {
    this.openPort(portId);
    return this;
  }

  sendCCMessage({ cc, value }) {
    const message = [176, cc, value];
    super.sendMessage(message);
    log('send:', message);
    return this;
  }

  stop() {
    log('exit');
    this.closePort();
    process.exit();
  }

  start() {
    log('start : end');
    return this;
  }
}
