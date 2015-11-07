(function () {
    'use strict';

    angular
        .module('wo')
        .factory('gameRepository', gameRepository);

    function gameRepository($http, $q) {
        var repositoryData = {
            games: []
        };
    }
})();
