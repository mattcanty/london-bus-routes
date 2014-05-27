var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var api = require('../api');

var handle = {};
handle["api"] = api.handleRequest;
handle["busroutes"] = requestHandlers.busroutes;

server.start(router.route, handle);
