var app = angular.module('CdCatalog', ['ngRoute','firebase']).
                  constant('FB_URL','https://music-catalog.firebaseio.com/');

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/',{
            templateUrl: 'views/categories.html',
            controller:  'MainController'
        }).
        when('/items/:itemId',{
            templateUrl: 'views/list-items.html',
            controller: 'ListItems'
        }).
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        }).
        when('/facebook', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        }).
        when('/twitter', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);