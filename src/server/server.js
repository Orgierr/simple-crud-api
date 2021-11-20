const http = require('http');
require('dotenv').config()
const server = new http.Server(function (req, res) {


  res.end('hello');
});

server.listen(process.env.PORT, 'localhost');