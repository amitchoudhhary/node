const sumRequestHandler = (res, req) => {
  console.log("In Sum Request Handler", req.url);
  const body = [];
  req.on('data',chunk => {
    body.push(chunk);
  });
req.on('end',() => {
  const bodyStr = Buffer.concact(body).tostring();
  const params = new URLSearchParams(bodyStr);
  const bodyObj = Object.fromEntries(params);
  const result = number(bodyObj.first) + number(bodyObj.second);
  console.log(result);

  res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>calculator</title></head>
        <body>
          <h1>your sum is ${result}</h1>
        </body>
      </html>`
    );
    return res.end();
});
  
}

exports.sumRequestHandler = sumRequestHandler