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
    return {

        getBranches: getBranches

    }
  });