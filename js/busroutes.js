function BusRoutesController($scope, $timeout, busRoutesService){
    $scope.info = 'Where does this bus go?!';
    
    var splinesTimeout;
  
    $scope.findRoute = function(){
      updateInfo('Looking for ' + $scope.route + '...');
      
      $timeout.cancel(splinesTimeout);
      splinesTimeout = $timeout(function(){
        updateInfo('Reticulating splines...');
      }, 1000);
      
      busRoutesService.search($scope.route).then(function(data){
        
        console.log(data);
        placeMarkers(data);
        $timeout.cancel(splinesTimeout);
        updateInfo('Here is ' + data._route + '\'s route!');
        
        resizeMap();
      });
    };
    
    function updateInfo(message){
      $scope.info = message;
    }
}