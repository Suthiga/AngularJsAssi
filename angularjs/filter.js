angular.module('purchasefilters', []).filter('purchased', function(){
  return function(input){
    console.log(input);
    return input ? '\u2713' : '\u0058';
  };
});
