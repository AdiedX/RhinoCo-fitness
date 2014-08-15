'use strict';

/**
 * @ngdoc overview
 * @name rhinoApp
 * @description
 * # scaffoldApp
 *
 * Main module of the application.
 */
angular
  .module('rhinoApp', [
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
