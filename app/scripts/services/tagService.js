'use strict';

angular.module('paniikkinappulaApp')
    .factory('TagService', function () {
        var tagVariables = {
            tag: ''
        };
        
        tagVariables.setVariable = function (key, value){
            tagVariables[key] = value;
        };
    
        return tagVariables;
    });