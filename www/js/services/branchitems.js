'use strict';

angular.module('fastFood')
  .factory('branchitems', function($http,$q) {
    var differed = $q.defer();
  	
    function getFoodList(id){
     
        $http.get('testData/itemList.json').success(function(data){
           var restaurantFood = [];
          //console.log(data);
          for (var i = 1; i < data.length; i++){
            //console.log(i);
             //console.log(data[i]);
              if(id == data[i].restuarant_id)
              {

                restaurantFood.push(data[i]);
              }
            
          }
          console.log(restaurantFood);
          differed.resolve(restaurantFood);
        });
        return differed.promise;
    }
    return {

        getFoodList: getFoodList

    }
  });
