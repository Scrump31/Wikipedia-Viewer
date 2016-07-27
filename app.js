(function () {
   'use strict';
}());

var wikiApp = angular.module('wikiApp', [])
.controller('ApiCtrl', function($scope, $http) {

  $scope.wikisearch = function() {
    var searchItm = $('#searchItm').val();
    //if search value typed in, run the search
    if(searchItm !== '') {
    $http.get("https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+searchItm+"")
    .then(function(response) {
        $scope.wikiresults = response.data;
        $('.col-lg-12').html('');
        for(var i = 0; i < $scope.wikiresults[1].length; i++) {

          if($scope.wikiresults[1].length < 0) {$('.col-lg-12').prepend('Sorry, no results.');}

          $('.col-lg-12').prepend('<div class="results bg-primary container animated rollIn" style="margin-top: 1rem; margin-bottom: 1rem;">'+
           ' <a style="color:white;text-decoration:none;" href="'+$scope.wikiresults[3][i]+'" target="_blank">'+
           '<h4>'+$scope.wikiresults[1][i]+'</h4>'+
           '<p>'+$scope.wikiresults[2][i]+'</p>'+
           '</a>' +
           '</div>'
          );
        }
    }, function errorCallback(response) {
          console.log(response);
    });
  } //if

  };// function
});
