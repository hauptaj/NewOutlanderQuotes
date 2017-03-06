var app = angular.module('myMod');

app.controller('myController', function($scope, $http) {

  $http({
    method: 'GET',
    url: '/phrase'
  }).then(function successCallback(response) {
    $scope.myPhrases = response.data;
  });

});
