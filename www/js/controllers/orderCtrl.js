'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('orderCtrl', function ($scope,$http,branches,$filter,$state,mailservice) {
  	var id = new Date().getTime();
  	//console.log(id);
  	var transaction = JSON.parse(window.localStorage['transaction'] || '[]');
  	console.log(transaction);
	$scope.total = $filter('getprice')($scope.selectedItems);
  	var currentTransaction = {
  		"transaction_id": id,
  		"total_price": $scope.total,
  		"items_bought": $scope.selectedItems,
  		"date": $scope.getDate.value

  	};
  	transaction.push(currentTransaction);
  	//console.log(transaction);

  	//window.localStorage['history'] = JSON.stringify($scope.selectedItems);
  	
  	//console.log($scope.total);
  	//console.log(window.localStorage['history']);
    //console.log($scope.selectedItems); 	
		$scope.items = $scope.selectedItems;
		$scope.formData = JSON.parse(window.localStorage['profile'] || '{}');
$scope.submitinfo = function(){
        var message = {
          first_name: $scope.formData.firstName,
          last_name: $scope.formData.lastName,
          email: $scope.formData.email,
          transaction_id: currentTransaction.transaction_id,
          total: $scope.total
        };
        mailservice.sendMail(message).then(function(data){
            if(data == "success"){
              alert("A confirmation email has been sent to you, you will be redirected to our payment page");

            }
        
        });
			window.localStorage['profile'] = JSON.stringify($scope.formData);
			window.localStorage['transaction'] = JSON.stringify(transaction);
      $state.go("home.payment");

		}
  });