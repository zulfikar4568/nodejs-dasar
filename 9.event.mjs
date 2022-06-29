import { EventEmitter } from 'events';

const emitter = new EventEmitter();

emitter.addListener("hallo", (name) => {
  console.info(`Hallo ${name}`)
})

emitter.addListener("hallo", (name) => {
  console.info(`hellos ${name}`)
})

emitter.emit("hallo", "Zulfikar")