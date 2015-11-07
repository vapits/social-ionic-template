(function () {
    'use strict';

    angular
        .module('wo')
        .factory('postRepository', postRepository);

    function postRepository($http, $q) {
        var repositoryData = {
            posts: []
        };

        return {
            findAll: findAll,
            findOne: findOne,
            findAllByUserId: findAllByUserId,
        };

        function findAll() {
            var posts = [];
            return $http({
                method: 'GET',
                url: ''
            }).then(function successCallback(response) {
                    posts = response.data;
            }, function errorCallback(response) {
                throw "postRepository.findAll: Error while fetching posts";
            });
            return posts;
        }

        function findOne( post ) {
            var post = {};
            return $http({
                method: 'GET',
                url: ''
            }).then(function successCallback(response) {
                    post = response.data;
            }, function errorCallback(response) {
                throw "postRepository.findOne: Error while fetching post" ;
            });
            return post;
        }

        function findAllByUserId( userId ) {
            var post = {};
            return $http({
                method: 'GET',
                url: '' + '/user/' + userId;
            }).then(function successCallback(response) {
                    post = response.data;
            }, function errorCallback(response) {
                throw "postRepository.findAllByUserId: Error while fetching post" ;
            });
            return post;
        }
    }
})();
