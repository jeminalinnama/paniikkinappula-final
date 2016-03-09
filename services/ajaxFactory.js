'use strict';

angular
    .module('chatApp')
    .factory('AjaxFactory', function ($http) {
        var urlBase = 'http://users.metropolia.fi/~ilkkamtk/chatApi';
        var ajaxFunctions = {};

        // Log in *
        ajaxFunctions.login = function (args) {
            return $http.post(urlBase + '/login', args);
        };

        // Delete message *
        ajaxFunctions.deleteMessage = function (args) {
            return $http.delete(urlBase + '/messages/' + args);
        };

        // Get all messages *
        ajaxFunctions.getAllMessages = function (args) {
            return $http.get(urlBase + '/messages', args);
        };

        // Get one message *
        ajaxFunctions.getOneMessage = function (args) {
            return $http.get(urlBase + '/messages/' + args);
        };

        // Modify a message *
        ajaxFunctions.modifyMessage = function (args) {
            return $http.put(urlBase + '/messages', args);
        };

        // Send a new message *
        ajaxFunctions.sendMessage = function (args) {
            return $http.post(urlBase + '/messages', args);
        };

        // Get all messages as threads *
        ajaxFunctions.getThreads = function (args) {
            return $http.get(urlBase + '/threads', args);
        };

        // Get all parent messages *
        ajaxFunctions.getParents = function (args) {
            return $http.get(urlBase + '/parents', args);
        };

        // Get message and its replies (one thread) *
        ajaxFunctions.getOneThread = function (args)  {
            return $http.get(urlBase + '/threads/' + args);
        };

        // Reply to a message *
        ajaxFunctions.replyMessage = function (args) {
            return $http.post(urlBase + '/threads', args);
        };

        // Sign up *
        ajaxFunctions.signUp = function (args) {
            return $http.post(urlBase + '/users', args);
        };

        // Delete a user *
        ajaxFunctions.deleteUser = function (args) {
            return $http.delete(urlBase + '/users/' + args);
        };

        // Get all users *
        ajaxFunctions.getAllUsers = function (args) {
            return $http.get(urlBase + '/users', args);
        };

        // Get one user *
        ajaxFunctions.getOneUser = function (args) {
            return $http.get(urlBase + '/users/' + args);
        };

        // Save profile image
        ajaxFunctions.sendProfileImage = function (args) {
            return $http.post(urlBase + '/images', args, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            });
        };

        return ajaxFunctions;
    });