'use strict';

/**
 * @ngdoc function
 * @name scaffoldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scaffoldApp
 */
angular.module('scaffoldApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
