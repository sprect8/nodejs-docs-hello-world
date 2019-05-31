const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<img src='https://upload.wikimedia.org/wikipedia/en/f/ff/SuccessKid.jpg' style='height:100%'>");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
