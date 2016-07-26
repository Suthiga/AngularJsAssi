var app3=angular.module('app3',[]);
app3.controller('listcontrol',function($scope){
  $scope.groceries=[
    {
      item:"pen",
      purchase:"false"
    },
    {
      item:"pencil",
      purchase:"false"
    },
    {
      item:"scale",
      purchase:"false"
    },
    {
      item:"marker",
      purchase:"false"
    }
  ]
  $scope.getList = function(){
   return $scope.showList ? "ulgrocerylist.html" : "grocerylist.html";
 };
});
