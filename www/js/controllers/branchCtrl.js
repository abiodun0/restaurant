'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('branchCtrl', function ($scope,$http,branches) {

  

 navigator.geolocation.getCurrentPosition(function(pos) {
                console.log('Position=');
                console.log(pos);
        $scope.map = { 
        center: { latitude: pos.coords.latitude, longitude: pos.coords.longitude }, 
        zoom: 18 
      };
      var maxLat = pos.coords.latitude + 0.002000;
      console.log(maxLat);
      var minLat = pos.coords.latitude - 0.002000;
      console.log(minLat);
      var maxLong = pos.coords.longitude + 0.002000;
      console.log(maxLong);
      var minLong = pos.coords.longitude - 0.002000;
      console.log(minLong);
        branches.getBranches().then(function(data){
          var closeBranches = [];
        var i = 0
        while(i<data.length){
          if(data[i].latitude <= maxLat && data[i].latitude >= minLat && data[i].longtitude <= maxLong && data[i].longtitude >= minLong){

            closeBranches.push(data[i]);
          }
          i++
        }

      $scope.branches = closeBranches;
      console.log($scope.branches);
        
    });
              });
  
  });