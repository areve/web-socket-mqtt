const mqtt = require('mqtt')
const client = mqtt.connect('wss://web-socket-mqtt.herokuapp.com:443/mqtt')
client.on('connect', () => {
  setInterval(() => {
    const message = new Date().toISOString()
    client.publish('topic1', 'hello from mqtt-publisher.js ' + message)
    client.publish('log', 'hello from mqtt-publisher.js ' + message)
    console.log('sent', message)
    }, 2000)
})