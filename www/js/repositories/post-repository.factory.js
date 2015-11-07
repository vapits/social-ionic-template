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
            createPost: createPost,
            updatePost: updatePost
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

        function createPost( post ) {
            return $http({
                method: 'POST',
                url: '',
                data: post
            }).then(function successCallback(response) {
                    // post created
            }, function errorCallback(response) {
                throw "postRepository.createPost: Error while creating post" ;
            });
            return post;
        }

        function updatePost( post ) {
            return $http({
                method: 'PATCH',
                url: '' + '/posts/' + post,
                data: post
            }).then(function successCallback(response) {
                    // post updated
            }, function errorCallback(response) {
                throw "postRepository.updatePost: Error while updating post" ;
            });
            return post;
        }
    }
})();
