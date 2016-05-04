angular.module('dataBetween')
.controller('MasterController', ['$scope','$log','shareService', function($scope,$log,shareService){
  $scope.vm = {};
  $scope.vm.searchText = "";
  $scope.vm.orderBy = "";
  
}]);
