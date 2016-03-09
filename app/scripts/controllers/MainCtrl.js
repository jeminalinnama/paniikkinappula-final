'use strict';

angular.module('paniikkinappulaApp')
    .controller('MainCtrl', function (AjaxFactory, PanicService, TagService, $scope, $location) {

        $scope.pageClass = 'page-main';
    
        $scope.downloadDown = function () {
            TagService.tag = 'down';
            $location.path('result');
        };

        $scope.downloadDepressed = function () {
            TagService.tag = 'depressed';
            $location.path('result');
        };

        $scope.downloadWorthless = function () {
            TagService.tag = 'worthless';
            $location.path('result');
        };

        $scope.downloadAnxiety = function () {
            TagService.tag = 'anxiety';
            $location.path('result');
        };

        $scope.downloadPanicky = function () {
            TagService.tag = 'panic';
            $location.path('result');
        };

        $scope.downloadUgly = function () {
            TagService.tag = 'ugly';
            $location.path('result');
        };

    });