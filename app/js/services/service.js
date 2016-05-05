angular.module('dataBetween')
.service('shareService', ['$localStorage', function($localStorage){
  if (!$localStorage.data) {
    $localStorage.data = [{votes:20},{votes:2},{votes:10}];
  }

  this.getData = function(){
    return $localStorage.data;
  }

  this.changeData = function(newValue){
    $localStorage.data.push(newValue);
  }

}]);
