'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('orderCtrl', function ($scope,$http,branches) {
  	window.localStorage['name'] = $scope.selectedItems;
  	console.log(window.localStorage['name']);
    console.log($scope.selectedItems); 	
		$scope.items = $scope.selectedItems;
		$scope.formData = {};
		$scope.submitinfo = function(){
			console.log($scope.formData);
		}
  });