angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    
  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  .state('tab.lists', {
    url: '/lists',
    views: {
      'tab-lists': {
        templateUrl: 'templates/tab-lists.html',
        controller: 'ListsCtrl'
      }
    }
  })
  
   .state('tab.details', {
    url: '/lists/:taskID',
    views: {
      'tab-lists': {
        templateUrl: 'templates/tab-details.html',
        controller: 'DetailsCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/tab/lists');

});
