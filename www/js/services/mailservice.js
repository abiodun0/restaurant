'use strict';

angular.module('fastFood')
  .factory('mailservice', function($http,$q) {
    var differed = $q.defer();
  	
    function sendMail(message){
      console.log(message);
        
        $http.post('http://golden0.com/mail/mailfastFood.php',message).success(function(data){
          console.log(data)
            differed.resolve(data);
        });
        return differed.promise;
    }
    return {

        sendMail: sendMail

    }
  });
