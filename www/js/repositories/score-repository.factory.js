(function () {
    'use strict';

    angular
        .module('wo')
        .factory('scoreRepository', scoreRepository);

    function scoreRepository($http, $q) {
        return {
            createScore: createScore,
        };

        function createScore( score ) {
            return $http({
                method: 'POST',
                url: '',
                data: score
            }).then(function successCallback(response) {
                    // score created
            }, function errorCallback(response) {
                throw "scoreRepository.createScore: Error while creating score" ;
            });
            return score;
        }
    }
})();
