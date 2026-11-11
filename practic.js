const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if(req.url === '/home'){
    res.write(`<h1>welcome to home </h1>`);
    return res.end();
  } else if (req.url === '/men'){
    res.write(`<h1>welcome to men </h1>`);
    return res.end(); 
  } else if (req.url === '/women'){
    res.write(`<h1>welcome to women </h1>`);
    return res.end(); 
  } else if (req.url === '/kid'){
    res.write(`<h1>welcome to kid </h1>`);
    return res.end(); 
  }
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
