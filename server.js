var	http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var query = url.parse(request.url).pathname;
    
    if(query == '/'){
      pingHeroku();  
    }
    
    console.log('Request received: ' + query);
    
    var pathname = query.split('/', 2)[1];
    
    route(handle, pathname, response, request); 
  }
  
  var port = process.env.PORT || 80;
  
  http.createServer(onRequest).listen(port);
  console.log('Server has started on port ' + port);
}

function pingHeroku(){
  var options = {
      host: 'bus-routes-api.herokuapp.com',
      port: 80,
      path: '/'
  };
  http.get(options, function(res) {
      res.on('data', function(chunk) {
          try {
            //everything is fine
          } catch (err) {
              console.log(err.message);
          }
      });
  }).on('error', function(err) {
      console.log("Error: " + err.message);
  });
}

exports.start = start;
