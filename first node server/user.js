const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>complete code</title></head>');
    res.write('<body><h1>enter your details</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="enter your name"><br>');
    res.write('<label for="male">male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female" /><br>');
    res.write('<input type="submit" value="submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST"){
    fs.writeFileSync('user.text', 'amit')
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>complete code</title></head>');
    res.write('<body><h1>welcome</h1></body>');
    res.write('</html>');
    res.end();
})

const port = 3500;
server.listen(port, () => {
  console.log(`server running on address http://localhost:${port} `);
  
}); 