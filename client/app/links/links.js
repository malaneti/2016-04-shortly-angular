angular.module('shortly.links', [])
// this is a controller that is tied to one module 
.controller('LinksController', function ($scope, Links) {
	  $scope.data = {};
  	 

  	  // $scope.All = function() {
  	  	// 

      Links.getAll($scope);
    

    // }
  // Your code here
});
