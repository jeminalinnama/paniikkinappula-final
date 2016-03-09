'use strict';

angular
    .module('chatApp')
    .service('ChatService', function () {
        var chatData = {
            user: {},
            logged: false
        };
        chatData.setUser = function (data) {
            this.user = data;
        };
        chatData.setLogged = function () {
            this.logged = true;
            console.log(this.logged);
        };
        return chatData;

    }); 