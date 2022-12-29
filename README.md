# angularjs
[official doc](https://angularjs.org/)

# angular js features

1. Two-way Data Binding: AngularJS provides two-way data binding, which means that any changes made to the view are immediately reflected in the model and vice versa.

2. MVC Architecture: AngularJS follows the MVC (Model-View-Controller) architecture, which helps developers to create client-side applications in a structured way.

3. Templates: AngularJS uses HTML as its template language, which makes it easier to create dynamic web applications.

4. Dependency Injection: AngularJS has a built-in dependency injection subsystem, which makes it easier to develop and maintain applications.

5. Directives: AngularJS provides a set of built-in directives, which can be used to extend the HTML vocabulary and create custom HTML elements.

6. Filters: AngularJS provides filters, which can be used to format data before displaying it to the user.

7. Testing: AngularJS provides a unit testing framework, which makes it easier to test the code.

## angular js architecture
AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write.

The architecture of AngularJS is based on the Model-View-Controller (MVC) design pattern. The Model is the data, the View is the HTML page, and the Controller is the JavaScript code that binds the two together.

The Model is responsible for managing the data of the application. It responds to requests for data from the View and it also sends updates to the View when the data changes.

The View is responsible for displaying the data to the user. It is the HTML page that the user sees and interacts with.

The Controller is responsible for responding to user input and making changes to the Model. It is the JavaScript code that binds the Model and the View together.

MVC - model view controller
M : $scope
V : html file
C : js file

## angular js Data binding
AngularJS data binding is the automatic synchronization of data between the model and view components. The way that AngularJS implements data binding lets you treat the model as the single-source-of-truth in your application. The view is a projection of the model at all times. When the model changes, the view reflects the change, and vice versa.
connect the view with the controller and the controller with the view
> proxy pattern

# angular js directives
AngularJS directives are extended HTML attributes with the prefix ng- that are used to trigger JavaScript behaviors. Directives are used to create custom HTML tags that serve as new, custom widgets. They can also be used to "decorate" elements with behavior and manipulate DOM attributes in interesting ways.

Examples of AngularJS directives include:

• ng-app: This directive defines and links an AngularJS application to HTML.
• ng-bind: This directive binds application data to the HTML view.
• ng-model: This directive binds the values of HTML controls (input, select, textarea) to application data.
• ng-repeat: This directive repeats HTML elements for each item in a collection.
• ng-show: This directive shows or hides the given HTML element based on the expression provided to the ng-show attribute.
• ng-hide: This directive shows or hides the given HTML element based on the expression provided to the ng-hide attribute.
• ng-class: This directive dynamically binds one or more CSS classes to an HTML element.
> decorator or wrapper pattern
```javascript
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
```

```html
<textarea limit="100"></textarea>
```

```html
<textarea ng-maxlength="100"></textarea>
```

- internally angular translate the names, from myTag to my-tag

# angular js directive types

1. Element Directive
2. Attribute Directive
3. CSS Class Directive
4. Comment Directive

# angular js filters
AngularJS filters are used to format the value of an expression for display to the user. They can be used in view templates, controllers, services and directives.

1. Currency: Formats a number as a currency.
2. Date: Formats a date to a specified format.
3. Filter: Selects a subset of items from an array.
4. JSON: Formats an object to a JSON string.
5. LimitTo: Limits an array/string, into a specified number of elements/characters.
6. Lowercase: Formats a string to lower case.
7. Number: Formats a number to a string.
8. OrderBy: Orders an array by an expression.
9. Uppercase: Formats a string to upper case.
> pipeline pattern

## angular js dependency injection
AngularJS dependency injection is a software design pattern that allows a class to obtain its dependencies from external sources rather than creating them itself. Dependency injection is a way to achieve loose coupling between classes and their dependencies. It helps to make a codebase more maintainable by reducing the amount of code that needs to be changed when a dependency changes.

In AngularJS, dependency injection is used to inject services, factories, and other objects into controllers, directives, and other components. This allows the components to use the services without having to know how they are implemented. It also allows the components to be easily tested by mocking the services.
> IOC pattern

- you can inject modules into another modules or objects into another objects like factories, services, controllers, directives, filters...

# angular js vs angular
AngularJS is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications. Its goal is to augment web-based applications with model–view–controller (MVC) capability, in an effort to make both development and testing easier.

Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges.

# gulpfile
let you package all your application in a bunch of optimized files
```javascript
var gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  source = "./src/",
  dest = "./dest/";

function html() {
  return gulp.src(dest + "**/*.html");
}

function js() {
  return gulp.src(dest + "**/*.js");
}

function styles() {
  return gulp.src(dest + "**/*.css");
}

function watch() {
  gulp.watch(source + "js/**/*.js", js).on("change", browserSync.reload);
  gulp.watch(source + "css/**/*.css", styles).on("change", browserSync.reload);
  gulp.watch(source + "index.html", html).on("change", browserSync.reload);
}
function server() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: source
    }
  });
}

  gulp.watch(source + "css/**/*.css", styles).on("change", browserSync.reload);
  gulp.watch(source + "index.html", html).on("change", browserSync.reload);
  gulp.watch(source + "index.html", js).on("change", browserSync.reload);

var build = gulp.series(gulp.parallel(js, styles, html), server, watch);

gulp.task("default", build)
```

# angular js ng-app directive

The ng-app directive is used to auto-bootstrap an AngularJS application. It designates the root element of the application and is typically placed near the root element of the page - e.g. on the <body> or <html> tags.

The ng-app directive tells AngularJS that the <div> element is the "owner" of an AngularJS application. It is typically placed near the root element of the page - e.g. on the <body> or <html> tags.

The ng-app directive is a starting point of AngularJS Application. It initializes an AngularJS application. It tells AngularJS that the <div> element is the "owner" of an AngularJS application. All the directives, expressions, filters, modules, controllers, services must be within this ng-app directive.
angular application
- by default it creates an app
- you can specified another app name
- you can have several apps in the same html page

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="lib/angular/angular.min.js"></script>
    <script src="lib/angular/angular-route.min.js"></script>
</head>
<body>
    <div ng-app="appChat">
        this is the chat
    </div>
</body>
</html> 
```

# angular js ng-bind directive
The ng-bind directive is used to bind the application data to the HTML view. It is a one-way data binding directive, which means that it will update the view whenever the data in the model changes, but it will not update the model when the view changes. The ng-bind directive is used to display the data from the model to the view. It is a very useful directive when you want to display the data from the model to the view without writing any extra code.

# angular js ng-model directive
The ng-model directive is an AngularJS directive that binds an HTML form element (input, select, textarea) to a property on the scope. It provides two-way data binding, which means that any changes made to the view (the HTML form) are reflected in the model (the property on the scope) and vice versa. The ng-model directive can be used to bind the value of an HTML form element to a property on the scope, to provide data-binding between the view and the model. It can also be used to bind the value of a property on the scope to an HTML form element, to provide data-binding between the model and the view.


# angular js ng-submit directive
The ng-submit directive is used to bind an expression to the form's submit event. This expression is evaluated when the form is submitted.

The ng-submit directive can be used to call a function when the form is submitted. This function can be used to perform validation, or to submit the form data to a server.

For example, the following code will call the submitForm() function when the form is submitted:

<form ng-submit="submitForm()">
  ...
</form>

# module
each app is a module, you can create modules and inject them in another module
- a module for controllers
- a module for directives
- a module for utils

```javascript
var app=angular.module("appChat", []);
```

# controller
a module is a bunch of controllers, directives, and so on
```javascript
app.controller("chatController", ["$scope", ($scope) => {
    $scope.name = "test name";
}]);
```

# src vs ng-src
browser process src before any other application, try to get all from cache, using ng-src we avoid 404 error code, the src will be applied once angular get's load

```html
<img ng-src="images/{{name}}" alt="" />
```

# ng-show, ng-hide
it creates the element in the DOM, and just show or hide base on css
```html
<img ng-src="images/{{name}}" ng-hide="age > 10" /> 
<img ng-src="images/{{name}}" ng-show="age > 10" />
```

# angular js ng-if directive
The ng-if directive in AngularJS is used to conditionally display or hide an element on the page. It works by evaluating an expression and then displaying or hiding the element based on the result of the expression. The ng-if directive can be used to show or hide elements, or even entire sections of the page, based on the value of a given expression. It is a powerful tool for creating dynamic and interactive user interfaces.

base on the condition, paint or not an element in the DOM

# services
# $http services
let you get data from web services
- base on promises

### $http returned value
the service wraps the data in the next structure
- config
- data
- header
- status
- statusText

```javascript
app.controller("dataController", ["$scope", "$http", ($scope, $http) => {
    $scope.name = "test name";
    $scope.data = [];
    $http.get("/data.json").then((response) => {
        $scope.data = response.data;
    });
}]);
```

# Filters
- date
- currency
- lowercase
- uppercase

![](img/basic_filters.png)  
they are used in the html files, mainly for apply some transformation to the data

## lowercase filter
```html
<div>{{e.description | lowercase}}</div>
```

## uppercase filter
```html
<div>{{e.name | uppercase}}</div>
```

# Array filters
## limitTo
let you limit the amount of data to show in a list
```html
<div ng-repeat="item in filters | limitTo:2:2">
</div>
```

## filter
let you filter in the collection by a variable
```html
<div ng-repeat="item in filters | filter:query">
</div>
```

## orderBy
let you sort the ng-repeat by an attribute
```html
<div ng-repeat="item in data | orderBy: 'name' : 'reverse'">
</div>
```

# ng-view
