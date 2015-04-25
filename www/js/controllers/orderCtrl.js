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
    console.log($scope.selectedItems); 	
		$scope.items = $scope.selectedItems;
  });