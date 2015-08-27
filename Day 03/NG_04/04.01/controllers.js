angular.module('myApp', [
  'myApp.controllers'
]);

angular.module('myApp').run(function($rootScope){
    $rootScope.title='Subhash Enterprise';
    $rootScope.name="Indian Edition";
});

angular.module('myApp.controllers',[]).controller('SiteController', function($scope){
  $scope.publisher='Divine Books Site';
  $scope.type="Web Development";
  $scope.name="Scope for the Site";
});

angular.module('myApp.controllers').controller('BookController', function($scope){
  $scope.books = ['Jump Start HTML5','Jump Start CSS','Jump Start Responsive Web Design'];
  $scope.name="Scope for the Books";
});

