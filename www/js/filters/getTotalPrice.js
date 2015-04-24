'use strict';

angular.module('fastFood')
.filter('getprice', function () {
    return function (value, property) {
        var total = 0;
        angular.forEach(value, function (val, index) {
            total = total + parseInt(val.price)
        });
        return total;
    }
});