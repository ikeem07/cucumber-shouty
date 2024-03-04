class Person {
  constructor(network) {
    this.messages = []
    this.network = network

    //this.network.subscribe(this)
  }

  shout(message) {
    //this.network.broadcast(message)
  }

  hear(message) {
    this.messages.push(message)
  }

  messagesHeard(message) {
    return [message]
  }
}

class Network {

}

export { Person, Network };