import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let connectedUsersAmount: number = 0;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log(`a user connected ${socket.id}`);
  io.emit('userConnected', socket.id);
  connectedUsersAmount++;
  io.emit('connectedUsersAmount', connectedUsersAmount);
  io.to(socket.id).emit('whoAmI', socket.id);
  socket.on('disconnect', () => {
    console.log(`user disconnected ${socket.id}`);
    io.emit('userDisconnected', socket.id);
    connectedUsersAmount--;
    io.emit('connectedUsersAmount', connectedUsersAmount);
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});