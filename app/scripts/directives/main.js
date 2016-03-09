'use strict';

angular.module('paniikkinappulaApp')
    .directive('main', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        };
    });