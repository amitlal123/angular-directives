angular.module('directivePractice')
.directive('lessonHider', function(){
  return {
    restrict: 'EA',
    templateUrl: 'lessonHider.html',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope, elems, attrs) {
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;
        scope.schedule.forEach(function(obj){
          if(obj.lesson === scope.lesson) {
            elems.find('li').css('text-decoration', 'line-through');
            scope.lessonDay = obj.weekday;
            scope.flag = true;
            return;
          }
        })
      });
    }
  }
});
