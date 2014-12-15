/*Code for the gallery portion of the site*/
(function(){
  var app = angular.module('photo-gallery',[]);
  /*Directive to show grid*/
  app.directive('galleryGrid', function(){
    return{
      restrict: 'E',
      templateUrl: 'templates/gallery-grid.html'
    };

  });
})();
