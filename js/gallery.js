(function(){
  var gal = angular.module('gallery',[]);

  gal.directive('photoGrid',function(){
    return{
      restrict: 'E',
      templateUrl: 'templates/photo-grid.html',
      controller: function(ImageGallery){
        var photoList = this;
        photoList.photos = [];
        ImageGallery.getPhotos().success(function(data){
          photoList.photos = data;
        });
      },
      controllerAs: 'grid'
    };
  });
})();
