'use strict';

/**
 * @ngdoc function
 * @name rhinoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rhinoApp
 */
angular.module('rhinoApp')
  .controller('ProjectCtrl', function($scope) {

    // http://lorempixel.com/500/250/
    $scope.picts = [];

    for (var i = 0; i < 20; i++) {
      $scope.picts.push({ src: 'http://lorempixel.com/500/250/'});
    }
    console.log($scope.picts);
    // $scope.singers = ['img/shakira.jpg', 'img/justin.jpg', 'img/selena.jpg', 'img/adam.jpg','img/ariana.jpg', 'img/ed.jpg', 'img/harry.jpg', 'img/alicia.jpg', 'img/jennifer.jpg', 'img/blake.jpg', 'img/pink.jpg', 'img/bruno.jpg', 'img/christina.jpg', 'img/jason.jpg',
    //   'img/pitbull.jpg', 'img/katy.jpg', 'img/iggy.jpg'
    // ];
  });
