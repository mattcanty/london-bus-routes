angular.module('BusRoutesApp', [])
  .controller('BusRoutesCtrl', function ($scope) {
  
    $scope.info = "Where does this bus go?!";
  
    $scope.findRoute = function(){
      loadStopData($scope.route, function (message) {
        $scope.info = message;
      });
    };
  });