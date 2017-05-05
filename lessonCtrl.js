angular.module('directivePractice')
.controller('lessonCtrl', function($scope){
  $scope.test = "Two way data binding";
  $scope.lessonList = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.announceDay = function(lesson, day) {
    alert('lesson ' + lesson + ' is active on ' + day +' .');
  }
});
