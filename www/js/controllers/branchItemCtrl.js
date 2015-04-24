'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('branchitemCtrl', function ($scope,$stateParams,branches,branchitems) {
    console.log($stateParams.id);
branches.getBranchData($stateParams.id).then(function(data){

          $scope.restaurant = data;
  
          });
  	branchitems.getFoodList($stateParams.id).then(function(data){
      //console.log("success");
      
  		$scope.availableFood = data;
  		console.log($scope.availableFood);
  			
  	});

  });   
