'use strict';

/**
 * @ngdoc function
 * @name rhinoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rhinoApp
 */
angular.module('rhinoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
