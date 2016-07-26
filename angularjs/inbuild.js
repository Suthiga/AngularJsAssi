var app = angular.module('app', ["ngSanitize"]);

app.controller('mycontrol', function($scope, $window, $location, $interval, $log, $exceptionHandler, $sanitize) {
  $scope.congrats=function(name){
    $window.alert("Congrats"+name);
  }
$scope.currURL = $location.absUrl();
$scope.protocoll=$location.protocol();
$scope.host=$location.host();
$scope.port=$location.port();
$interval(function() {
   var hour = new Date().getHours();
   var minutes = ('0' + new Date().getMinutes()).slice(-2);
   var seconds = ('0' + new Date().getSeconds()).slice(-2);
   $scope.time = hour + ":" + minutes + ":" + seconds;
 }, 1000);
 $scope.$log=$log;
 $scope.throwException = function() {
    // If we didn't catch the exception a stack
    // trace would print in the console
    try {
      throw new Error("Exception Thrown");
    }
    catch(e) {
      // Receives the exception and a string
      // explaining the exception
      $exceptionHandler(e.message,
        "Caught Exception");
    }
  }
});
