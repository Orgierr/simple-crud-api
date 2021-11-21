const http = require('http');
const app = require('../app/app');
const PORT = process.env.PORT || 8080;
require('dotenv').config()
const server = new http.Server(app);
server.listen(PORT, 'localhost');

