var app1=angular.module('app1',[]);
app1.controller('control',function($scope){
  $scope.old=1;
  $scope.new=1;
  $scope.newValue = function() {
      $scope.calculation = $scope.old + ' + ' + $scope.new +
        " = " + (+$scope.old + +$scope.new);
  };
});
