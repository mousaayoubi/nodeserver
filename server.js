var http = require("http");
var fs = require("fs");

var host = "127.0.0.1";
var port = "3000";

fs.readFile("./index.html", function(error, html) {
  if (error) {
    console.log(error);
    return;
  }
  var server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.write(html);
    response.end();
  });

  server.listen(port, host, function() {
    console.log("Server is running on port " + port);
  });
});
