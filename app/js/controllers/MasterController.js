angular.module('dataBetween')
.controller('MasterController', ['$scope','$log','$interval', function($scope,$log,$interval){
  $scope.vm = {};
  $scope.vm.searchText = "";
  $scope.vm.orderBy = "";

  $interval(function(){
    $log.info($scope.vm);
  },5000);


}]);
