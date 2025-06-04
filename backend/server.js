import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server); 

app.use(express.static('public'));

// Handle WebSocket connection
io.on('connection', (socket) => {
  console.log('A client has connected');

  // Send sample data every 2 seconds
  const intervalId = setInterval(() => {
    const data = {
      timeStamp: new Date().getTime(),
      value: Math.random() * 100,
    };
    socket.emit('realtime data', data);
  }, 2000);

  socket.on('disconnect', () => {
    console.log('Client has disconnected');
    clearInterval(intervalId); 
  });
});

server.listen(3001, () => {
  console.log('WebSocket server running on http://localhost:3001');
});
