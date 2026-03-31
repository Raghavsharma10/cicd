const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello from Docker Node App");
});

server.listen(3000, '0.0.0.0');
