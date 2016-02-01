app.controller('MainController', 
    ['$scope','DataService',
             function($scope, DataService){
              DataService.readTitle();
             //Get the collection
              DataService.readCategories();    
             //console.log(arrayRef);     
}]);// Main Controller

app.controller('ListItems', 
               ['$scope','$routeParams','DataService',
                    function($scope,$routeParams, DataService){
                      //console.log($routeParams);
                      DataService.readItems($routeParams.itemId);                   
}]);

app.controller('LoginController', 
               ['$scope','$routeParams',
                    function($scope,$routeParams){
                      //console.log($routeParams);
                      
}]);