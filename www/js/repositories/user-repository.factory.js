(function () {
    'use strict';

    angular
        .module('wo')
        .factory('userRepository', userRepository);

    function userRepository($http, $q) {
        var repositoryData = {
            users: []
        };

        return {
            findAll: findAll,
            findOne: findOne,
        };

        function findAll() {
            var users = [];
            return $http({
                method: 'GET',
                url: ''
            }).then(function successCallback(response) {
                users = response.data;
            }, function errorCallback(response) {
                throw "userRepository.findAll: Error while fetching users";
            });
            return users;
        }

        function findOne( user ) {
            var user = {};
            return $http({
                method: 'GET',
                url: ''
            }).then(function successCallback(response) {
                    user = response.data;
            }, function errorCallback(response) {
                throw "userRepository.findAll: Error while fetching user";
            });
            return user;
        }
    }
})();
