(function(){
  var gal = angular.module('gallery',[]);

  gal.directive('photoGrid',function(){
    return{
      scope: {
        photos : "=",
        searchTerm : "=search"
      },
      restrict: 'E',
      templateUrl: 'photoGrid/photo-grid.html',
      controller: function(){

      },
      controllerAs: 'photoList'
    };
  });
})();
