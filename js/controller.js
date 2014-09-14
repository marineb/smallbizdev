var app = angular.module('profitly', ['ngRoute', 'chartjs']);

function profitlyRouteConfig($routeProvider, $locationProvider) {
  $routeProvider.
  when ('/', {
    templateUrl: '/views/home.html'
  }).
 when ('/dashboard', {
    templateUrl: '/views/dashboard.html'
  }).
 when ('/cashflow', {
    aliases: ['cash'],
    templateUrl: '/views/cashflow.html'
  }).
  when ('/menu', {
    templateUrl: '/views/menu.html'
  }).
  when ('/smart', {
    templateUrl: '/views/smart.html'
  }).
  when ('/goals', {
    templateUrl: '/views/goals.html'
  }).
   otherwise ({
    redirectTo: '/'
  });
  
  //$locationProvider.html5Mode(true);

}

app.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
     
 });


app.controller('graph', function($scope) {
  $scope.someData = {
    labels: [
      'Supply', 
      'May', 
      'Jun'
    ],
    datasets: [
      {
	data: [1, 7, 15, 19, 31, 40]
      },
      {
	data: [6, 12, 18, 24, 30, 36]
      }
    ]
  };

  $scope.someOptions = {
      segmentStrokeWidth: 20,
      segmentStrokeColor: '#000'
  };
 });




//console.log(route);
//console.log(location);

app.config(profitlyRouteConfig);

// Make sure GA passes the right data
//app.run(function ($rootScope, $location) {
//    $rootScope.$on('$routeChangeSuccess', function(){
//      ga('send', 'pageview', $location.path());
//    });
//});




