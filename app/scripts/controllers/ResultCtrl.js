'use strict';

angular.module('paniikkinappulaApp')
    .controller('ResultCtrl', function (AjaxFactory, PanicService, TagService, $scope, $location) {

        $scope.pageClass = 'page-result';
        $scope.text = 'http://placekitten.com/401/301/';

        var tag = TagService.tag;

        var vastaus = AjaxFactory.getContent(tag);
        vastaus.then(function (posts) {
            var postings = posts.data.response.posts;
            var totalpostcount = posts.data.response.total_posts - 1;

            var random;
            random = PanicService.randomIntFromInterval(0, totalpostcount);
            console.log(random);
            //console.log(postings[random].photos[0].original_size.url);
            $scope.text = postings[random].photos[0].original_size.url;
        });

        $scope.backHome = function () {
            $location.path('');
        };

        $scope.newPhoto = function () {
            var tag = TagService.tag;

            var vastaus = AjaxFactory.getContent(tag);
            vastaus.then(function (posts) {
                var postings = posts.data.response.posts;
                var totalpostcount = posts.data.response.total_posts - 1;

                var random;
                random = PanicService.randomIntFromInterval(0, totalpostcount);
                console.log(random);
                //console.log(postings[random].photos[0].original_size.url);
                $scope.text = postings[random].photos[0].original_size.url;
            });
        };

    });