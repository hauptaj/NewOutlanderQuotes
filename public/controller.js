var app = angular.module('myMod');

app.controller('myController', function($scope, $interval, $http) {

  $http({
    method: 'GET',
    url: '/phrase'
  }).then(function successCallback(response) {
    console.log(response.data);
    $scope.myPhrases = response.data;
  });
  
  $interval(function(){
    $http({
      method: 'GET',
      url: '/phrase'
    }).then(function successCallback(response) {
      console.log(response.data);
      $scope.myPhrases = response.data;
    });

  }, 5000);



});
