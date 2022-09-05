var http = require('http');

// creates a server object
http.createServer(function (req, res) { // req argument: represents the request from the client as an object
    res.writeHead(200, {'Content-Type': 'text/html'}); // status code: 200 means that all is OK; the second argument: object containing the response headers.
    res.write('Hello World!');
    res.end(); // end the response
}).listen(8080);  // the port the server object listens to 