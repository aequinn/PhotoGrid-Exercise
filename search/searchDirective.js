(function(){
  var search = angular.module('searchDir', []);

  search.directive('search', function(){
    return{
      scope: {
        term: '=term'
      },
      restrict: 'E',
      templateUrl: 'search/search.html',
      controller: function(){}
    };
  });

})();
