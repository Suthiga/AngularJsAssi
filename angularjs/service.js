var app= angular.module('app', []);
app.service('myservice',function(){
   this.helloService=function(){
    console.log("hello");
  };
});
app.factory('myfactory',function(){
  var factory={};
  factory.helloFactory=function(){
    console.log("hi");
  };
  return factory;
});
app.controller("mycontrol", function(myservice,myfactory){
  myservice.helloService();
  myfactory.helloFactory();

});
