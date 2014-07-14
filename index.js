var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/busroutes"] = requestHandlers.busroutes;
handle["/"] = requestHandlers.busroutes;
handle["/route"] = requestHandlers.getRoute;

handle.loadStaticFile = requestHandlers.loadStaticFile;

server.start(router.route, handle);
