'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('profileCtrl', function ($scope,$http,branches) {
  	
		console.log(window.localStorage['profile']);
  });