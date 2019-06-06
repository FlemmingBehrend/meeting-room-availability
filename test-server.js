const WebSocketServer = require('websocket').server;
const http = require('http');

const wait = ms => new Promise((r, j) => setTimeout(r, ms));

// ******************* WEB SOCKET TEST SERVER **********************
const WS_SERVER = ' - WS SERVER   >> ';
const clients = [];
const WEB_SOCKET_SERVER_PORT = 1337;

const server = http.createServer(() => {});
server.listen(WEB_SOCKET_SERVER_PORT, function() {
    console.log(new Date() + WS_SERVER + ` WebSocket test server is listening on port ${WEB_SOCKET_SERVER_PORT}`);
});

const wsServer = new WebSocketServer({ httpServer: server });

wsServer.on('request', request => {
    console.log(new Date() + WS_SERVER + ' Connection from origin ' + request.origin + '.');
    const connection = request.accept(null, request.origin);
    const index = clients.push(connection) - 1;
    console.log(new Date() + WS_SERVER + ' Connection accepted.');

    connection.on('message', message => {
        console.log(new Date() + WS_SERVER + ' Message:', message);
    });

    connection.on('close', connection => {
        console.log(new Date() + WS_SERVER + ' Peer ' + connection.remoteAddress + ' disconnected.');
        clients.splice(index, 1);
    });

    const rooms = [
        'Forurening',
        'Brud',
        'Klemt',
        'Byggefejl',
        'Driftstab',
        'Snetryk',
        'Markbrand',
        'Kolik',
        'Havari',
        'Påkørsel',
        'Sygdom',
        'Brand',
        'Uheld',
        'Storm',
        'Kollision',
        'Ulykke',
        'Skybrud',
        'Indbrud',
        'Hærværk',
        'Strømsvigt',
        'Lynnedslag',
        'Fugt',
        'Utæthed',
        'Tøbrud',
        'Bilskade',
        'Motorstop',
        'Byggesjusk',
        'Nedbrud',
        'Tyveri',
        'Smerte',
        'Stenslag',
        'Fald',
        'Konflikt'
    ];

    setInterval(() => {
        connection.sendUTF(
            JSON.stringify({
                name: rooms[Math.floor(Math.random() * rooms.length)],
                time: new Date(),
                availability: Math.floor(Math.random() * 2 + 1)
            })
        );
    }, 3000);
});
