(function () {
   'use strict';
}());

var wikiApp = angular.module('wikiApp', [])
.controller('MainCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);
