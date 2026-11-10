const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
})

const port = 3500;
server.listen(port, () => {
  console.log(`server running on address http://localhost:${port} `);
  
}); 