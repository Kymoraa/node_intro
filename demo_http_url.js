var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url); // rq object has a property called "url" which holds the part of the url that comes after the domain name
  res.end();
}).listen(8080); // access http://localhost:8080/test = prints /test