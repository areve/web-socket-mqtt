const path = require("path");
const http = require("http");
const express = require("express");
const mosca = require("mosca");
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json({ type: "application/json" });
const textParser = bodyParser.text({ type: "text/plain" });
const indexHtml = path.join(__dirname, "index.html");
const browserMqttJs = path.join(__dirname, "browserMqtt.js");

const app = express()
  .get(/^\/mqtt$/, (req, res) => res.sendFile(browserMqttJs))
  .get(/^.*$/, (req, res) => res.sendFile(indexHtml));

const server = http.createServer(app);
const mqttServer = new mosca.Server({});
mqttServer.attachHttpServer(server, '/mqtt');
mqttServer.on('clientConnected', function(client) {
  console.log('client connected', client.id);
});
mqttServer.on('published', function(packet, client) {
  console.log('from', client && client.id, [packet.topic, packet.payload]);
});
mqttServer.on('ready', function(packet, client) {
  console.log('mqtt ready');
});

server.listen(process.env.PORT || 80)

