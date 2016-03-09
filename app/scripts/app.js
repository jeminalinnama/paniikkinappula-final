'use strict';

angular
    .module('paniikkinappulaApp', [
    'ngTouch',
    'ngAnimate',
    'ngRoute',
    'ui.router'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/result', {
                templateUrl: 'views/result.html',
                controller: 'ResultCtrl',
                controllerAs: 'result'
            })
            .otherwise({
                redirectTo: '#'
            });
    });