var app6=angular.module("app6",['purchasefilters']);
app6.controller("mycontrol",function(){
  this.name="Suthiga";
  this.age=21;
  this.getdetail=function(){
    alert(this.name+" is "+this.age+" years old");
  };
});
app6.controller("others",function($controller){
  var childctrl=this;
  childctrl.child = $controller('mycontrol', {});
  childctrl.child.name = "Raja";
   childctrl.child.color = "pink";
   childctrl.child.othersdata = function(){
     alert(this.name + " is " + this.age + " and " + this.color);
  }
});
app6.controller("newcontrol",function($scope){
  $scope.items = [
     {name: "pen", price: 20},
     {name: "pencil", price: 45},
     {name: "scale", price: 43},
     {name: "marker", price: 67}
   ];
$scope.date=new Date();
$scope.random="In this part of my AngularJS tutorial I’m going to cover Form Validation, Using $rootScope to share data between controllers, Controller Inheritance, Filters, Custom Filters and a whole lot more.";
$scope.purchases = [
   {name: "pen", purchase: false},
   {name: "pencil", purchase: true}
 ];

});
