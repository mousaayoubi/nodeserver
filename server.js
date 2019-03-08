var http = require("http");

var host = "127.0.0.1";
var port = "3000";

var server = http.createServer(function(request, response) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("hi world");
});

server.listen(port, host, function() {
  console.log("Server is listening on port " + port);
});
