'use strict';

/**
 * @ngdoc function
 * @name rhinoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rhinoApp
 */
angular.module('rhinoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
