var static = require('node-static');

var fileServer = new static.Server();

function route(handle, pathname, response, request){
  console.log("About to route a request for: '" + pathname + "'.");
  
  if(typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log("Loading static file " + pathname);
    
    request.addListener('error', function () {
    })
    
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
  }
}

exports.route = route
