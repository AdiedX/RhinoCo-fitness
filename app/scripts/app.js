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
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/media', {
      	templateUrl: 'views/media.html'
      })
      .when('/projects', {
      	templateUrl: 'views/projects.html'
      })
      .when('/nutrition', {
      	templateUrl: 'views/nutrition.html'
      })
      .when('/management', {
      	templateUrl: 'views/management'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
