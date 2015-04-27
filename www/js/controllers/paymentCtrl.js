'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('paymentCtrl', function ($scope,$http,$state) {
  	$scope.stripeCallback = function (code, result) {
    if (result.error) {
        window.alert('error please try again');
        return false;
    } else {
        window.alert('Transaction Successfull');
          $state.go("home.index");
        
    }

};

  });