var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var api = require('../api/src');

var handle = {};
handle["api"] = api.handleRequest;
handle["busroutes"] = requestHandlers.busroutes;
handle[""] = requestHandlers.busroutes;

server.start(router.route, handle);
