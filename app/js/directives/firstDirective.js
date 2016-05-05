angular.module('dataBetween')
.directive('firstDirective', ['$log','shareService', function($log,shareService){
  return {
    scope: {
      orderBy: '=',
      searchText: '='
    },
    templateUrl: './directive_templates/first_directive.html',
    link: function(scope,element,attrs){
      scope.vm = {};
      scope.vm.data = shareService.getData();

      scope.$on('imgSearchChange', function(event, emission) {
        $log.info('$on: ', emission);
        scope.vm.imgSearch = emission;
      });

    }
  }
}]);
