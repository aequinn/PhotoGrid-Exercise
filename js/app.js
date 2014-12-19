(function(){
  /*Load Angular module & dependancies*/
  var app = angular.module('photos',['gallery','searchDir']);

  /*main app controller*/
  app.controller('PhotoController', ['ImageGallery',function(ImageGallery){
    var photoList = this;
    ImageGallery.getPhotos();
    photoList.imageGallery = ImageGallery;

  }]);
  app.service('ImageGallery', ['$http', function($http){

      this.photos = {};
      this.getPhotos = function(){
          var that=this;
          var promise = $http.get('data/imageGallery.json');
          promise.success(function(data){
            that.photos = data;
          });
          return promise;

      };
    }]);
})();
