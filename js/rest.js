var restHelpers = angular.module('rest-helpers', []);

restHelpers.factory('http', function($http, $q){
    
    var rest = {};
    
    rest.get = function (url) {
        var deferred = $q.defer();
        $http.get(url)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (error, status) {
                deferred.reject(error, status);
                console.log(status + ': ' + error);
            });
        return deferred.promise;
    };
    
    return rest;
    
});
