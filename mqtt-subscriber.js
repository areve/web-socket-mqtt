const mqtt = require('mqtt')
const client = mqtt.connect('wss://web-socket-mqtt.herokuapp.com:443/mqtt')
client.on('connect', () => {
  client.subscribe('log')
})
client.on('message', (topic, message) => {
  context = message.toString();
  console.log(topic, context)
})