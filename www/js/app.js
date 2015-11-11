angular.module('wo', ['ionic', 'wo.controllers'])

    .run(function ($ionicPlatform, $rootScope, $state) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            $rootScope.$state = $state;
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('home', {
                url: '/home',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            .state('home.feed', {
                url: '/feed',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })

            .state('home.profile', {
                url: '/profile',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/profile.html',
                        controller: 'HomeCtrl'
                    }
                }
            })
            .state('home.profile.visit', {
                url: '/profile/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/profile.html',
                        controller: 'HomeCtrl'
                    }
                }
            })

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home/feed');
    });
