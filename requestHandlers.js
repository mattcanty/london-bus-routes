var static = require('node-static');

var fileServer = new static.Server(__dirname);

function busroutes(response, request) {
  fileServer.serveFile('/html/index.html', 200, {}, request, response);
}

function getRoute(response, request){
  console.log("Getting route");
}

function loadStaticFile(response, request) {
    
  request.addListener('error', function (err) {
    console.log(err);
  });
  
  request.addListener('end', function () {
      fileServer.serve(request, response);
  }).resume();
}

exports.busroutes = busroutes;
exports.getRoute = getRoute;
exports.loadStaticFile = loadStaticFile;