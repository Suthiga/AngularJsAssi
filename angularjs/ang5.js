var app5=angular.module("app5",[]);
app5.controller("mycontrol",function($scope){
  $scope.examples=[
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
  ];
  $scope.additem=function(newitem){
    if(!(newitem===undefined||newitem===""))
    {
      $scope.examples.push(
        {
          item:newitem,
            purchase:"false"
        }

      );
      $scope.missingerror="";
    }
    else {
      $scope.missingerror="Please enter an item";
    }
  };

});
app5.controller("myctrl",function($scope){
  $scope.ex=[
    {
      name:"asd",
      age:56,
      male:"Male"
    }
  ];
$scope.mysubmit = function(myinfo) {
    if($scope.myform.$valid) {
      $scope.ex.push({
        name: myinfo.name, age: myinfo.age,male:myinfo.male
      });
      console.log('User Saved');
    } else {
      console.log('Error : Couldn\'t Save User');
    }
 }

});
app5.controller("combined",function($scope,$rootScope){
  $scope.items=[
    {
     name:"pen",
     price:67
   },
    {
     name:"scale",
     price:7
   },
    {
       name:"pencil",
       price:6
    }
  ];
  $scope.getprice=function(names){
      searchprice($scope.name);
  };
  function searchprice(name){
    $scope.pricedetail= "Not Found";
    for(var i=0; i < $scope.items.length; i++){
      if ($scope.items[i].name === name){
        $scope.pricedetail = $scope.items[i].price + " is for " + $scope.items[i].name;
      }
    }
  }
  $scope.$on("newlyadded", function(event, args){
   console.log("price : " + args.price + " name : " + args.name);
   $scope.items.push({
     price: args.price, name: args.name
   });
 });
 $scope.addnewdata = function(price, name){
   $rootScope.$broadcast("newlyadded",
   {
     price: price, name: name
   });
   console.log("Price : " + price + " Name: " + name);

 };

});
