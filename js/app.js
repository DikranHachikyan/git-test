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
        otherwise({
            redirectTo: '/'
        });
}]);