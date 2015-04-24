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

  	branches.getBranches().then(function(data){
  		$scope.branches = data;
  		console.log($scope.branches);
  			
  	});
  		$scope.map = { 
        center: { latitude: 6.576421000000000000, longitude: 3.365344000000050000 }, 
        zoom: 16 
      };
  
  });