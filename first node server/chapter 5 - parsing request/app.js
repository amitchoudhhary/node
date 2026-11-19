const http = require('http');
const userRequestHandler = require('./user');

const server = http.createServer(userRequestHandler);

const port = 3500;
server.listen(port, () => {
  console.log(`server running on address http://localhost:${port} `);
}); 