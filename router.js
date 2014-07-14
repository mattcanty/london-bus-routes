var static = require('node-static');

var fileServer = new static.Server(__dirname);

function route(handle, pathname, response, request){
  console.log("About to route a request for: '" + pathname + "'.");
  
  if(typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    handle.loadStaticFile(response, request, pathname);
  }
}

exports.route = route
