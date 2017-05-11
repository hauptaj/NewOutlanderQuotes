var app = angular.module('myMod');

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/phrase', {
      controller: 'myController',
      templateUrl: 'phrase.html'
    });

    $locationProvider.hashPrefix('');
});
