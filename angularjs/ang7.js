var app7=angular.module("app7",[]);
app7.directive("mydirective",function(){
  return function(scope,ele,attr){
    var items=ele.children();
    var list="";
    // console.log(items);
    for(var i=0;i<items.length;i++)
    {
      if(items.eq(i).text()=="Pen")
      {
        items.eq(i).css("font-size","29px");
        items.eq(i).attr("Stock","yes");
      }
      if(items.eq(i).text()=="Pencil")
      {
        items.eq(i).addClass("myclass");
      }
      list+=items.eq(i).text()+ ",";
      angular.element(document.querySelector('#mylist')).text(list);
      var stock=angular.element(document.querySelector('#pen')).attr('Stock');
      angular.element(document.querySelector('#penstock')).text(stock);
      //angular.element(document.querySelector('#pencil')).removeClass("myclass");
      var stocks=angular.element(document.querySelector('#pencil')).hasClass("myclass");
      // console.log(stocks);
      angular.element(document.querySelector('#hasmyclass')).text(stocks);
    }
    // console.log(list);
  };
});

app7.controller("newcontrol",function($scope){
//console.log($scope.name);
$scope.myclick=function(){
  angular.element(document.querySelector('#pencil')).toggleClass("myclass");
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

}
});
