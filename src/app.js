var app=angular.module("appChat", [
    "ngRoute",
    "package",
]);

app.controller("chatController", ["$scope", function($scope){
    $scope.name = "test name";
    $scope.query = "this is the query";
    $scope.instructions = "instructions to use this chat";
}]);

app.controller("view1Controller", ["$scope", function($scope){
    $scope.name = "test name";
}]);

app.controller("detailsController", ["$scope", "$routeParams", function($scope, $routeParams){
    $scope.name = "test name "+$routeParams.id;
}]);

app.directive('limit', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var limit = parseInt(attrs.limit);
      angular.element(element).on("keypress", function(e) {
          if (this.value.length == limit) e.preventDefault();
      });
    }
  }
});

app.directive('myCard', function() {
  return {
    template: `
    <div>
      <label>name : </label>
      <span>this is the best name</span>
    </div>
    ` 
  }
});

app.directive('myCardWithController', function() {
  return {
    restrict: "E",
    template: `
    <div>
      <label>name : {{name}}</label>
      <span>this is the best name</span>
    </div>
    `,
    controller: ["$scope", function ($scope){
      $scope.name = "my name";
    }]
  }
});

app.directive('myCardWithControllerAndClass', function() {
  return {
    restrict: "AEC",
    template: `
    <div>
      <label>name : {{name}}</label>
      <span>this is the best name and css class</span>
    </div>
    `,
    controller: ["$scope", function ($scope){
      $scope.name = "my name";
    }]
  }
});

app.directive('cardView', function() {
  return {
    restrict: 'CEA',
    templateUrl: 'views/card.html',
    controller: 'chatController'
  }
});

app.directive('cardViewWithScope', function() {
  return {
    restrict: 'CEA',
    templateUrl: 'views/card.html',
    scope: {
      name: "=nombre"
    }
  }
});

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