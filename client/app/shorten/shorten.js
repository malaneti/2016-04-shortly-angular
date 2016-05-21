angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.data = {};
  $scope.link = {};
  
  $scope.signout = function() {
    Auth.signout(); 
  }; 
  
  $scope.addOne = function() {

    console.log($scope.link.url);
    Links.addOne($scope.link); 
    $scope.link.url = '';
  }; 
  // Your code here
});
