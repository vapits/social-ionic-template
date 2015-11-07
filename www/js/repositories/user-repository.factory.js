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
            createUser: createUser,
            updateUser: updateUser,
            deleteUser: deleteUser
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

        function createUser(user) {
            return $http({
                method: 'POST',
                url: '',
                data: user
            }).then(function successCallback(response) {
                    // user created
            }, function errorCallback(response) {
                throw "userRepository.createUser: Error while creating user";
            });
        }

        function updateUser(user) {
            return $http({
                method: 'PATCH',
                url: '',
                data: user
            }).then(function successCallback(response) {
                    // user updated
            }, function errorCallback(response) {
                throw "userRepository.updateUser: Error while updating user";
            });
        }

        function deleteUser(user) {
            return $http({
                method: 'DELETE',
                url: '' + 'users/' + user,
                data: user
            }).then(function successCallback(response) {
                    // user updated
            }, function errorCallback(response) {
                throw "userRepository.deleteUser: Error while deleting user";
            });
        }
    }
})();
