var app=angular.module("package", []);

app.controller("packageController", ["$scope", function($scope){
    $scope.name = "package name";
}]);

app.controller("secondController", ["$scope", function($scope){
    $scope.age = 10;
    $scope.data = [
        {"name":"angular js", "description":"simpler"},
        {"name":"less tools", "description":"not tooling at all"},
        {"name":"directives", "description":"base on directives for everything"},
        {"name":"ng-app", "description":"main directive, it means, a module will be there"},
        {"name":"ng-controller", "description":"link an html element with a javascript controller, view model controller in action"},
        {"name":"ng-src", "description":"avoid 404 error when you are trying to get an image"},
        {"name":"ng-if", "description":"remove or create an element in the dom"},
        {"name":"ng-show", "description":"hide or show the element in the dom using css"},
        {"name":"ng-hide", "description":"hide or show the element in the dom using css"},
        {"name":"ng-repeat", "description":"go for each element in a list"},
    ]
}]);

app.controller("dataController", ["$scope", "$http", function($scope, $http){
    $scope.name = "test name";
    $scope.data = [];
    $http.get("/data.json").then((response) => {
        $scope.data = response.data;
    });
}]);

app.controller("arrayFiltersController", ["$scope", "$http", function($scope, $http){
    $scope.filters = [
        "uppercase",
        "lowercase",
        "date",
        "limitTo"
    ];

    $scope.data = [];
    $http.get("/data.json").then((response) => {
        $scope.data = response.data;
    });
}]);
