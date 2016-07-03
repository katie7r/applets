'use strict';

/**
 * @ngdoc overview
 * @name appletsApp
 * @description
 * # appletsApp
 *
 * Main module of the application.
 */
angular
  .module('appletsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/fates', {
        templateUrl: 'views/fates.html',
        controller: 'FatesCtrl',
        controllerAs: 'fates'
      })
      .when('/mendel', {
        templateUrl: 'views/mendel.html',
        controller: 'MendelCtrl',
        controllerAs: 'mendel'
      })
      .when('/pokematchup', {
        templateUrl: 'views/pokematchup.html',
        controller: 'PokematchupCtrl',
        controllerAs: 'pokematchup'
      })
      .when('/titleize', {
        templateUrl: 'views/titleize.html',
        controller: 'TitleizeCtrl',
        controllerAs: 'titleize'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
