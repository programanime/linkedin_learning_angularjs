var app=angular.module("appChat", [
    "ngRoute",
    "package",
]);

app.controller("chatController", ["$scope", function($scope){
    $scope.name = "test name";
    $scope.query = "this is the query";
}]);

app.controller("view1Controller", ["$scope", function($scope){
    $scope.name = "test name";
}]);

app.controller("detailsController", ["$scope", "$routeParams", function($scope, $routeParams){
    $scope.name = "test name "+$routeParams.id;
}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/search.html',
        controller: 'view1Controller'
      })
      .when('/details/:id', {
        templateUrl: 'views/details.html',
        controller: 'detailsController'
      })
}]);