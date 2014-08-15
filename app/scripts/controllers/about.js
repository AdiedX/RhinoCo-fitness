'use strict';

/**
 * @ngdoc function
 * @name scaffoldApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the scaffoldApp
 */
angular.module('scaffoldApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
