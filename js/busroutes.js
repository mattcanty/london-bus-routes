function BusRoutesController($scope, busRoutesService){
    $scope.info = 'Where does this bus go?!';
  
    $scope.findRoute = function(){
      updateInfo('Looking for ' + $scope.route + '...');
      
      busRoutesService.search($scope.route).then(function(data){
        updateInfo('Reticulating splines');
        console.log(data);
        placeMarkers(data);
        
        updateInfo('Here is ' + data._route + '\'s route!');
        
        resizeMap();
      });
    };
    
    function updateInfo(message){
      $scope.info = message;
    }
}