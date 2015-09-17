var http = require('http');
var requestCount = 0;
var server = http.createServer(function (request, response) {
    console.log('request starting...', requestCount);

    console.log(request);

    // respond
    response.write('hello client!');
    response.end();

    requestCount++;

});

server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
