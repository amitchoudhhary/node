const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeaders('content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>complete code</title></head>');
  res.write(<body><h1>welcome</h1></body>);
  res.write('</html>');
  res.end();
  
})

const port = 3500;
server.listen(port, () => {
  console.log(`server running on address http://localhost:${port} `);
  
}); 