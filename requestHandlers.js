var fs = require("fs");

function busroutes(response, request) {
  console.log("Request handler 'busroutes' was called");
  
  loadStaticFile("/html/index.html", response);
}

function loadStaticFile(path, response) {

  var fullPath = __dirname + path;

  console.log("Loading static file: " + fullPath);

  fs.readFile(fullPath, "utf8", function(error, html) {
    if (error) {
      console.log(path + " " + error);
      throw error; 
    }
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  });
}

exports.busroutes = busroutes;

