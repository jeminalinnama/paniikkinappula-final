'use strict';

angular.module('paniikkinappulaApp')
    .directive('result', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'views/result.html',
            controller: 'ResultCtrl'
        };
    });