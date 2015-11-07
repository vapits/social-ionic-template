(function () {
    'use strict';

    angular
        .module('starter')
        .factory('usersRepository', usersRepository);

    function usersRepository($http, $q) {
        var storage = {
            users: []
        };

        return {
            findAll: findALl,
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
                throw "usersRepository.findAll: an error occured";
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
                throw "usersRepository.findOne: an error occured";
            });
            return users;
        }
    }

})();
