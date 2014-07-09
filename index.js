var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["busroutes"] = requestHandlers.busroutes;
handle[""] = requestHandlers.busroutes;

server.start(router.route, handle);
