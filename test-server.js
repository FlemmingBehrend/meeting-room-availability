const WebSocketServer = require("websocket").server;
const http = require("http");
const express = require("express");

const wait = ms => new Promise((r, j) => setTimeout(r, ms));

// ******************* WEB SOCKET TEST SERVER **********************
const WS_SERVER = " - WS SERVER   >> ";
const clients = [];
const WEB_SOCKET_SERVER_PORT = 1337;

const server = http.createServer(() => {});
server.listen(WEB_SOCKET_SERVER_PORT, function() {
  console.log(
    new Date() +
      WS_SERVER +
      ` WebSocket test server is listening on port ${WEB_SOCKET_SERVER_PORT}`
  );
});

const wsServer = new WebSocketServer({ httpServer: server });

wsServer.on("request", request => {
  console.log(
    new Date() + WS_SERVER + " Connection from origin " + request.origin + "."
  );
  const connection = request.accept(null, request.origin);
  const index = clients.push(connection) - 1;
  console.log(new Date() + WS_SERVER + " Connection accepted.");

  connection.on("message", message => {
    console.log(new Date() + WS_SERVER + " Message:", message);
  });

  connection.on("close", connection => {
    console.log(
      new Date() +
        WS_SERVER +
        " Peer " +
        connection.remoteAddress +
        " disconnected."
    );
    clients.splice(index, 1);
  });
});
