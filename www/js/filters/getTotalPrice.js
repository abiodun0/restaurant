'use strict';

angular.module('fastFood')
.filter('getprice', function () {
    return function (value, property) {
        var total = 0;
        angular.forEach(value, function (val, index) {
            total = total + Number(val.price.replace(/[^0-9\.]+/g,""))
        });
        return total.toFixed(2);
    }
});