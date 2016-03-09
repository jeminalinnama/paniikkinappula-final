'use strict';

angular.module('paniikkinappulaApp')
    .factory('PanicService', function () {
        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        var panicvariabels = {
            'randomIntFromInterval': randomIntFromInterval
        };
        return panicvariabels;
    });