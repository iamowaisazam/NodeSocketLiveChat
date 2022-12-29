// const express = require('express');
// const app = express();

// const http = require('http').createServer(app);
// const PORT = process.env.PORT || 3000
// http.listen(PORT,() => {
//  console.log('Server Is Running '+PORT)
// });

//  console.log('Server Is Running')

// app.use(express.static(__dirname + '/public'))

// app.get('/',(req,res) => {
//   res.sendFile(__dirname + '/index.html');
// })

// const io = require('socket.io')(http)

// io.on('connection',(socket) => {
//     console.log('Connected..');

//     socket.on('message',(msg) => {
//     //  console.log(msg);
//     // socket.broadcast.emit('message',msg);
//      io.emit('message', msg);
//     });

  
// });






const app = require('express')();
const { v4 } = require('uuid');

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;

