'use strict';

/**
 * @ngdoc overview
 * @name scaffoldApp
 * @description
 * # scaffoldApp
 *
 * Main module of the application.
 */
angular
  .module('scaffoldApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
