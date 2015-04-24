'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
    .controller('branchitemCtrl', function ($scope,$stateParams,$http) {
      
    console.log($stateParams.id);
      $http.get('testData/fastFood.json').success(function(data){
        for(var i=0; i<data.length; i++){

          if($stateParams.id == data[i].id){

                $scope.testData = data[i];
          }
        }

      

      });

    /*branchitems.getFoodList($stateParams.id).then(function(data){
      //console.log("success");
      
      $scope.availableFood = data;
      console.log($scope.availableFood);
        
    });*/

  }); 
