angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, Links) {
  // Your code here
  $scope.data = {};
  $scope.filteredlink = '';

  $scope.getLinks = function() {
    return Links.getLinks().then(function(links) {
      $scope.data.links = links;
    });
  }

  $scope.navToLink = function(link) {
    return Links.navToLink(link);
  };

  $scope.predicate = 'visits';
  $scope.reverse = true;

  $scope.getLinks();


});

angular.module('shortly.navigation', ['ngFx'])
.controller('NavigationController', function ($scope) {
  $scope.data = {};
})
.directive('pulseOnClick', function($animate){
  return function(scope, elem){
    elem.on('click', function(){
      $animate.animate(elem, 'someclass')
      scope.$apply();
    });
  };
});
