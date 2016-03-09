'use strict';

angular
    .module('paniikkinappulaApp')
    .factory('AjaxFactory', function ($http) {

        var apikey = 'wUoQDRVc32IyOToAIVKFzrrfNvEfLUbbdGh3VhzNntgXsW0RBN';
        var urlBase = 'http://api.tumblr.com/v2/blog/youareenoughlookatthesecats.tumblr.com/posts?api_key=' + apikey + '&callback=JSON_CALLBACK';
        var ajaxFunctions = {};

        // Get all messages *
        ajaxFunctions.getContent = function (args) {
            return $http.jsonp(urlBase + '&tag=' + args);
        };

        return ajaxFunctions;
    });