var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Define route

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Define socket listeners

io.on('connection', function (socket){
    console.log('A new connection boi');

    socket.on('chat message', function (msg) {
        // What do to if you receive a message from 
        // one of the clients
        io.emit('chat message',msg);
    });
    socket.on('disconnect', function (){
        console.log('someone disconnected');
    });
});

http.listen(3000);
