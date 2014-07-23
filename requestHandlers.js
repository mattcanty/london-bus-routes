var http = require('http-get');
var url = require('url');
var static = require('node-static');

var fileServer = new static.Server(__dirname);

function busroutes(response, request) {
  fileServer.serveFile('/html/index.html', 200, {}, request, response);
}

function getRoute(response, request){
  var query = url.parse(request.url).pathname.split('/')[2];
  
  var resource = 'http://bus-routes-api.herokuapp.com/route/' + query;
  
  console.log('about to make request to: ' + resource);
  
  http.get({url: resource, bufferType: 'buffer', }, function (err, res) {
    if (err) {
      console.error(err);
    } else {
      response.writeHead(200, {'Content-Type': 'text/json'});
      response.write(res.buffer.toString());
      response.end();
    }
  });
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