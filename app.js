(function () {
   'use strict';
}());
var wikiApp = angular.module('wikiApp', [])
// snippet to help with CORS issue
.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])

.controller('ApiCtrl', function($scope, $http) {
  // Runs when search button clicked
  $scope.wikisearch = function() {
    var searchItm = $('#searchItm').val();
    // If search input not empty, run the search
    if(searchItm !== '') {
      $http.get("https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+searchItm+"")
    .then(function(response) {
        $scope.wikiresults = response.data;
        // Clears out search result area
        $('.col-lg-12').html('');
        for(var i = 0; i < $scope.wikiresults[1].length; i++) {
          // Loads search results into page
          $('.col-lg-12').prepend('<div class="results bg-primary container animated rollIn" style="margin-top: 1rem; margin-bottom: 1rem;">'+
           ' <a style="color:white;text-decoration:none;" href="'+$scope.wikiresults[3][i]+'" target="_blank">'+
           '<h4>'+$scope.wikiresults[1][i]+'</h4>'+
           '<p>'+$scope.wikiresults[2][i]+'</p>'+
           '</a>' +
           '</div>'
          );
        }
    // Log any errors
    }, function errorCallback(response) {
          console.log(response);
    });
  } //if
};// wikisearch function
});// api controller
