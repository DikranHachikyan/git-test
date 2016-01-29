app.controller('MainController', 
    ['$scope','DataStorage',
             function($scope, DataStorage){
              DataStorage.readTitle();
             //Get the collection
              DataStorage.readCategories();    
             //console.log(arrayRef);     
}]);// Main Controller

app.controller('ListItems', 
               ['$scope','$routeParams','DataStorage',
                    function($scope,$routeParams, DataStorage){
                      //console.log($routeParams);
                      DataStorage.readItems($routeParams.itemId);                   
}]);