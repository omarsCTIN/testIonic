angular.module('App', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html'
    })
    .state('estadoUno', {
      url: '/estadoUno',
      controller: 'EstadoUnoController',
      templateUrl: 'views/estadoUno/estadoUno.html'
    })
    .state('estadoDos', {
      url: '/estadoDos',
      controller: 'EstadoDosController',
      templateUrl: 'views/estadoDos/estadoDos.html'
    })
    .state('estadoTres', {
      url: '/estadoTres',
      controller: 'EstadoTresController',
      templateUrl: 'views/estadoTres/estadoTres.html'
    });


  $urlRouterProvider.otherwise('/home');

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
