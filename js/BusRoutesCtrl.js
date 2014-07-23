angular.module('BusRoutesApp', [])
  .controller('BusRoutesCtrl', function ($scope) {
  
    $scope.info = "Where does this bus go?!";
  
    $scope.findRoute = function(){
      updateInfo("Looking for " + $scope.route + "...");

      loadStopData($scope.route, updateInfo);
    };
    
    function updateInfo(message){
      $scope.info = message;
    }
  });
  