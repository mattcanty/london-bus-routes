var	http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    
    var query = url.parse(request.url).pathname;
    
    console.log('Request received: ' + query);
    
    var pathname = query.split('/', 2)[1];
    
    route(handle, pathname, response, request); 
  }
  
  var port = process.env.PORT || 8080;
  
  http.createServer(onRequest).listen(port);
  console.log("Server has started on port " + port);
}

exports.start = start;
