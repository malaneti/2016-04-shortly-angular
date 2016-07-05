angular.module('shortly.services', [])
// just a controller than can be used by a lot of different modules
.factory('Links', function ($http) {
 var getAll = function(linkscope) {

 // var mockResponse = [
 //        { title: 'Twitter',
 //          url: 'https://twitter.com' },
 //        { title: 'Reddit',
 //          url: 'https://reddit.com/r/javascript' }
 //      ];
    return $http({
      method: 'GET',
      url: '/api/links/',
    })
    .then(function (resp) {
      // console.log(linkScope)
      // console.log(resp.data)
      // we want to now store the links (in our resp) in our model so
      // that they can be rendered in the view 
      // response has built in property data?
      linkscope.data.links = resp.data;
      //return resp.data;
    });
};

  var addOne = function(link) {
    return $http({
      method: 'POST',
      url: '/api/links/',
      data: JSON.stringify(link)
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
   getAll: getAll
   addOne: addOne
  };

.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
