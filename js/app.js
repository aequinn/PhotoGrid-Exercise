(function(){
  /*Load Angular module & dependancies*/
  var app = angular.module('photos',['gallery']);

  /*main app controller*/
  app.controller('PhotoController', ['ImageGallery',function(ImageGallery){
    var photoList = this;
    photoList.photos = [];
    ImageGallery.getPhotos().success(function(data){
      photoList.photos = data;
    });
  }]);
  app.service('ImageGallery', ['$http', function($http){
      return{
        getPhotos: function(){
          return $http.get('data/imageGallery.json');
        }
      };
    }]);
})();
