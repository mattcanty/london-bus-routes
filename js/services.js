var services = angular.module('services', ['rest-helpers']);

services.factory('busRoutesService', function(http){
    
    var busRoutesService = {};
    
    busRoutesService.search = function (route) {
        var url = window.location.origin + '/route/' + route;
        
        return http.get(url);
    };

    return busRoutesService;
});