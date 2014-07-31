function BusRoutesController($scope, busRoutesService){
    $scope.info = 'Where does this bus go?!';
  
    $scope.findRoute = function(){
      updateInfo('Looking for ' + $scope.route + '...');
      
      busRoutesService.search($scope.route).then(function(data){
        placeMarkers(data);
      });

      //loadStopData($scope.route);
    };
    
    function updateInfo(message){
      $scope.info = message;
    }
}