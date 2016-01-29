app.factory('DataStorage',['$rootScope','$firebaseObject','$firebaseArray', 'FB_URL',
            function($rootScope,$firebaseObject,$firebaseArray, FB_URL){
                 var ref = new Firebase(FB_URL); 
                 var ds = {
                readTitle: function(){
                            var objRef = $firebaseObject(ref.child('catalog'));
                            //тук е необходимо да се изчака зареждането на обекта     
                            objRef.$loaded().then(function(){
                            $rootScope.message = objRef.$value; 
                            });
                },// get the title
                readItems: function(catid){
                           var objRef = $firebaseObject(ref.child('collection/' + catid));
                           objRef.$loaded(function(){
                           $rootScope.items = objRef.items;    
                        });//when the object is loaded
                        },// get items
                readCategories: function(){
                           var arrayRef = $firebaseArray(ref.child('collection'));
                           $rootScope.collection = arrayRef;                    
                }                                
            };    
            return ds; 
}]);