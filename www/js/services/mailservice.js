'use strict';

angular.module('fastFood')
  .factory('mailservice', function($http,$q) {
    var differed = $q.defer();
  	
    function getBranches(user){
        user.message = "your order has been successfully placed";
        $http.get('http://golden0.com/mailfastFood.php',user).success(function(data){
            differed.resolve(data);
        });
        return differed.promise;
    }
    return {

        getBranches: getBranches

    }
  });
