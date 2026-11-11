const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.write(`
    <html lang="en">
    <head>
    <title>myntra</title>
    </head>
    <body>
    <head>
    <nav>
    <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/men">Men</a></li>
    <li><a href="/women">Women</a></li>
    <li><a href="/kid">Kid</a></li>
    </ul>
    </nav>
    </head>
    </body>
    </html>
    `);
  res.end();
});

server.listen(3500, () => {
  console.log("server running on address http://localhost:3500");
});
