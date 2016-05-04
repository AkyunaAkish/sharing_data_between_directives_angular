angular.module('dataBetween')
.directive('firstDirective', ['$log', function($log){
  return {
    scope: {
      orderBy: '=',
      searchText: '='
    },
    templateUrl: './directive_templates/first_directive.html',
    link: function(scope,element,attrs){
      scope.vm = {};
      scope.vm.posts = [{votes:20},{votes:2},{votes:10}];
    }
  }
}]);
