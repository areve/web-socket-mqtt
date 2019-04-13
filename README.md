# web-socket-mqtt

A MQTT server that works over WebSockets.

See the [Demo](https://web-socket-mqtt.herokuapp.com).

## Command line examples

* Run `yarn mqtt-subscriber` to create a subscriber.
* Run `yarn mqtt-publisher` to create a publisher.

## ESP8266 example

The reason I created this was as server for an ESP8266 device. The example code in  [WebSocketStreamClient](https://github.com/areve/WebSocketStreamClient) can use MQTT over secure WebSockets to communicate with the demo site. 