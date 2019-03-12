var http = require("http");
var fs = require("fs");

var host = "127.0.0.1";
var port = "3000";

fs.readFile("./index.html", function(error, data) {
  if (error) {
    console.log(error);
    return;
  }
  var server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.getHeader("Content-Type", "text/html");
    response.write(data);
    response.end();
  });

  server.listen(port, host, function() {
    console.log("Server is listening on port " + port);
  });
});
