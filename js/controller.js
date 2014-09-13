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
    aliases: ['cash'],
    templateUrl: '/views/cashflow.html'
  }).
   otherwise ({
    redirectTo: '/'
  });
  
  //$locationProvider.html5Mode(true);
  
  
//  app.controller('userData', function(){
//    this.users = users;
//  });
//
//  var users = [
//    {
//      first: 'Julie',
//      last: '',
//      expenses: [
//      {
//	employees: 'Food Processing',
//	day: 'Sundays',
//	time: '8:30 PM',
//	week: 'C'
//      }],
//      shifts: [
//      {
//	time: '1401669000000',
//	status: 'default'
//      },
//      {
//	time: '1404088200000',
//	status: 'swap in progress'	
//      },
//      {
//	time: '1406507400000',
//	status: 'swapped'
//      }
//      ]
//    },
//    {
//      first: 'John',
//      last: 'Doe'
//    }
//  ];
//  
//}

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




