const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>calculator</title></head>
        <body>
          <h1>welcome to calculator</h1>
          <a href='/'>go to calculator</a>
        </body>
      </html>`);
      return res.end();
  } else if (req.url === "/calculator")
   res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>calculator</title></head>
        <body>
          <h1>404 page doesnot exist</h1>
          <a href='/calculator'>go to home</a>
        </body>
      </html>`);
      return res.end();
}

module.exports = requestHandler;