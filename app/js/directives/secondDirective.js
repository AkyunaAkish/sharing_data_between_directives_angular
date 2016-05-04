angular.module('dataBetween')
.directive('secondDirective', ['$log','shareService', function($log,shareService){
  return {
    scope: {
      orderBy: '=',
      searchText: '='
    },
    templateUrl: './directive_templates/second_directive.html',
    link: function(scope,element,attrs){
      scope.vm = {};

      scope.changeData = function(){
        shareService.changeData({votes: scope.vm.newData});
        scope.vm.newData = null;
      }

    }
  }
}]);
