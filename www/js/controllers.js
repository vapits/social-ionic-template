angular.module('wo.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('HomeCtrl', function($scope, $ionicModal, $timeout) {

  $scope.feed = [
    {
      'datetime': '2015-11-05',
      'fistName': 'Vassilis',
      'lastName': 'Pitsounis',
      'userImg': 'https://scontent-fra3-1.xx.fbcdn.net/hprofile-xpa1/v/t1.0-1/p160x160/1486846_10151912161843165_1917079991_n.jpg?oh=6119ca4492f93ea5bdd48b7909fc55e7&oe=56BB05DF',
      'post': 'Lorem ipsum dolor sit amet, justo liber tollit sea ne. Et nec rationibus eloquentiam. #Purto solum oporteat sea ei, ea molestie torquatos voluptatum est.'
    },
    {
      'datetime': '2015-11-05',
      'fistName': 'Dennis',
      'lastName': 'Pantazopoulos',
      'userImg': 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xlf1/v/t1.0-1/p160x160/11951285_10206571581902545_8055568626196037305_n.jpg?oh=3042dcc0b662d9f06869c575a675d9c5&oe=56C043B9&__gda__=1454712907_f12800c3b6a220f71dec534501869862',
      'post': 'Et nec rationibus eloquentiam. Purto solum oporteat sea ei, ea molestie torquatos #voluptatum est.'
    }
  ];



});