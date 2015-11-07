(function () {
    'use strict';

    angular
        .module('wo')
        .factory('activityRepository', activityRepository);

    function activityRepository($http, $q) {
        return {
            findAll: findAll,
        };
    }

    function findAll() {
        var items = [];
        return $http({
            method: 'GET',
            url: ''
        }).then(function successCallback(response) {
            items = response.data;
        }, function errorCallback(response) {
            throw "activityRepository.findAll: Error while fetching activities";
        });
        return users;
    }
})();
