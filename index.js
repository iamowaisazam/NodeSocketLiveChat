const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = process.env.PORT || 3000

http.listen(PORT,() => {
 console.log('Server Is Running '+PORT)

});

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res) => {
  res.sendFile(__dirname + '/index.html');
})

const io = require('socket.io')(http)

io.on('connection',(socket) => {
    console.log('Connected..');

    socket.on('message',(msg) => {
    //  console.log(msg);
    // socket.broadcast.emit('message',msg);
     io.emit('message', msg);
    });

  
});
