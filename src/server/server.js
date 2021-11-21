const http = require('http');
require('dotenv').config()
const PORT = process.env.PORT || 8080;
const server = new http.Server(function (req, res) {

});
server.listen(PORT, 'localhost');

