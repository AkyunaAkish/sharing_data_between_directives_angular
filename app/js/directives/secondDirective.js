angular.module('dataBetween')
.directive('secondDirective', ['$log', function($log){
  return {
    scope: {
      orderBy: '=',
      searchText: '='
    },
    templateUrl: './directive_templates/second_directive.html',
    link: function(scope,element,attrs){
      scope.vm = {};
    }
  }
}]);
