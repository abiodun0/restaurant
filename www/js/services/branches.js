'use strict';

angular.module('fastFood')
  .factory('branches', function($http,$q) {
    var differed = $q.defer();
  	
    function getBranches(){
        $http.get('testData/fastFood.json').success(function(data){
            differed.resolve(data);
        });
        return differed.promise;
    }
    function getBranchData(id){
      var restuarant_profile = [];
        $http.get('testData/fastFood.json').success(function(data){
            for(var i=0; i<data.length; i++){
              if(id == data[i].id){
                console.log(data[i]);
               restuarant_profile = data[i];
              }
            }

            differed.resolve(restuarant_profile);
        });
        return differed.promise;
    }
    return {

        getBranches: getBranches,
        getBranchData : getBranchData

    }
  });
