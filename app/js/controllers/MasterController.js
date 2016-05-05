angular.module('dataBetween')
.controller('MasterController', ['$scope','$log','shareService','$http', function($scope,$log,shareService,$http){
  $scope.vm = {};
  $scope.vm.searchText = "";
  $scope.vm.orderBy = "";
  $scope.vm.imageSearch;

  $scope.$watch("vm.imageSearch", function handleChange( newValue, oldValue ) {
    $log.info('$watch: ', newValue);
    $scope.$broadcast('imgSearchChange', newValue );
  });

  $scope.searchImg = function(){
    $http.get('http://api.pixplorer.co.uk/image?word=' + 'gorilla').then(function(res){
      $scope.vm.imageSearch = res.data.images[0].imageurl;
    })
  }

}]);
