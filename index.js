var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle[''] = requestHandlers.busroutes;
handle.busroutes = requestHandlers.busroutes;
handle.route = requestHandlers.getRoute;

handle.loadStaticFile = requestHandlers.loadStaticFile;

server.start(router.route, handle);
