const app = require('express')();
const { v4 } = require('uuid');

app.get('/', (req, res) => {
    
    console.log('hello');
     res.send("Hello world!");
});

console.log('App is running');

module.exports = app;
