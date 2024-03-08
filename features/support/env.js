import { setWorldConstructor } from '@cucumber/cucumber'
import { Network } from '../../classes/shouty.js';

const DEFAULT_RANGE = 0

class ShoutyWorld {
  get messagesShoutedBy() {
    return (this._messagesShoutedBy = this._messagesShoutedBy || {})
  }

  get network() {
    return (this._network = this._network || new Network(DEFAULT_RANGE))
  }

  shout({ from: shouter, message }) {
    shouter.shout(message)
    if (!this.messagesShoutedBy[shouter.name])
      this.messagesShoutedBy[shouter.name] = []
    this.messagesShoutedBy[shouter.name].push(message)
  }
}

setWorldConstructor(ShoutyWorld)