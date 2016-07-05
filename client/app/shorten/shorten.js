angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.data = {};
  $scope.link = {};
  
  $scope.signout = function() {
    Auth.signout(); 
  }; 
  
  $scope.addLink = function() {

    console.log($scope.link.url);
    Links.addLink($scope.link); 
    $scope.link.url = '';
  }; 
  // Your code here
});
