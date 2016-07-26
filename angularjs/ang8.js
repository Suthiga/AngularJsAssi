var app8=angular.module("app8",[]);

app8.directive("myNewDirective",function(){
   //console.log("mydata");
  return function(scope,element,attrs){
    var mydata=scope[attrs["myNewDirective"]];

    if (angular.isArray(mydata)) {
        var arrayItem = attrs["arrAyItem"];
        var list = angular.element("<div>");
        element.append(list);
        for (var i = 0; i < mydata.length; i++){
          list.append(angular.element('<h4>').text(scope.$eval(arrayItem, mydata[i])));
        }

        list.after(angular.element("<span id='mays'>").text("Willy Mays"));
        var gehrigHTML = "<span id='gehrig'>Lou Gehrig</span>";
               var replacement = angular.element(gehrigHTML);
               angular.element(document.querySelector('#mays'))
               .replaceWith(replacement);
      }
  };
});

app8.controller("newcontrol",function($scope){
//console.log($scope.name);
  $scope.newitems=[
    {
      name:"pen",
      price:20
    },
    {
      name:"pencil",
      price:10
    },
    {
      name:"scale",
      price:60
    }
  ];
});
