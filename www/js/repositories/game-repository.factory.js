(function () {
    'use strict';

    angular
        .module('wo')
        .factory('gameRepository', gameRepository);

    function gameRepository($http, $q) {
        var repositoryData = {
            games: []
        };

        return {
            findAll: findAll,
            findOne: findOne,
            findAllByUserId: findAllByUserId,
            createGame: createGame,
            updateGame: updateGame,
            deleteGame: deleteGame
        };

        function findAll() {
            var games = [];
            return $http({
                method: 'GET',
                url: ''
            }).then(function successCallback(response) {
                    games = response.data;
            }, function errorCallback(response) {
                throw "gameRepository.findAll: Error while fetching games";
            });
            return games;
        }

        function findOne( game ) {
            var game = {};
            return $http({
                method: 'GET',
                url: ''
            }).then(function successCallback(response) {
                    game = response.data;
            }, function errorCallback(response) {
                throw "gameRepository.findOne: Error while fetching game" ;
            });
            return game;
        }

        function findAllByUserId( userId ) {
            var game = {};
            return $http({
                method: 'GET',
                url: '' + '/user/' + userId;
            }).then(function successCallback(response) {
                    game = response.data;
            }, function errorCallback(response) {
                throw "gameRepository.findAllByUserId: Error while fetching game" ;
            });
            return game;
        }

        function creategame( game ) {
            return $http({
                method: 'POST',
                url: '',
                data: game
            }).then(function successCallback(response) {
                    // game created
            }, function errorCallback(response) {
                throw "gameRepository.creategame: Error while creating game" ;
            });
            return game;
        }

        function updategame( game ) {
            return $http({
                method: 'PATCH',
                url: '' + '/games/' + game,
                data: game
            }).then(function successCallback(response) {
                    // game updated
            }, function errorCallback(response) {
                throw "gameRepository.updategame: Error while updating game" ;
            });
            return game;
        }
    }
})();
