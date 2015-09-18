angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(url) {
    if (url) {
      Links.addLink(url).then(function(link) {
        $scope.link = link;
      });
    }
  };
});
