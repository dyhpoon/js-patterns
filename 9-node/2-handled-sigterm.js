var http = require('http');

var server = http.createServer(function (req, res) {
  setTimeout(function () { //simulate a long request
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }, 10000);
}).listen(9090, function (err) {
  console.log('listening http://localhost:9090/');
  console.log('pid is ' + process.pid)
});

process.on('SIGTERM', function () {
    server.close(function () {
        process.exit(0);
    });
});

/**
» curl http://localhost:9090 &
» kill 23703
[2] 23832
» Hello World
» curl http://localhost:9090 & // connection refused
*/