var app=angular.module("app",['ngRoute']);
app.config(["$routeProvider",function($routeProvider) {
       $routeProvider

           // route for the home page
           .when('/filter', {
               templateUrl : 'filter.html',
               controller  : 'mycontrol'
           })

           // route for the about page
           .when('/developer', {
               templateUrl : 'developer.html',
               controller  : 'mycontrol'
           });

           // route for the contact page

   }]);

app.controller("mycontrol",function($scope,$http){
  $scope.searches=[];
    $scope.search = function(){
    $scope.searches.push($scope.option);
    searchword($scope.option);
    // console.log($scope.searches);
  }
  function searchword(option) {
    $http.get("http://localhost:3000/Profile").success(
      function(data){
         $scope.result=[];
         for(var i=0;i<data.length;i++){
          // console.log("hi");
          // console.log(data[i].Name);
           if(data[i].Name==option||data[i].AssociateId==option||data[i].Designation==option||data[i].PlaceofWork==option){
            $scope.result.push(data[i]);

           }
         }
           console.log($scope.result);
      });
    }
    $scope.filter=function(){
      $scope.var=[];
      for(var i=0;i<$scope.result.length;i++){
        if($scope.result[i].Designation=="Developer")
        {
          $scope.var.push($scope.result[i]);
        }
      }
      console.log($scope.var);
    }
});
