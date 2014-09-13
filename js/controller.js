var myAppModule = angular.module('profitly', ['ngRoute']);

function feelioRouteConfig($routeProvider, $locationProvider) {
  $routeProvider.
  when ('/', {
    templateUrl: '/views/menu.html'
  }).
 when ('/dashboard', {
    templateUrl: '/views/dashboard.html'
  }).
 when ('/cashflow', {
    templateUrl: '/views/dashboard.html'
  }).
   otherwise ({
    redirectTo: '/'
  });
  
  $locationProvider.html5Mode(true);  
}

myAppModule.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

//console.log(route);
//console.log(location);

myAppModule.config(feelioRouteConfig);

// Make sure GA passes the right data
myAppModule.run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function(){
      ga('send', 'pageview', $location.path());
    });
});