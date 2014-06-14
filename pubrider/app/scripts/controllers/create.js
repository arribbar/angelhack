'use strict';

/**
 * @ngdoc function
 * @name pubriderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pubriderApp
 */
angular.module('pubriderApp')
  .controller('CreateCtrl', function ($scope, $location) {
      $scope.create = function() {
          $location.path("/manage/" + $scope.name);
      };
  });
