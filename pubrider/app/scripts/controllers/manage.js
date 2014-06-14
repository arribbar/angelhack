'use strict';

/**
 * @ngdoc function
 * @name pubriderApp.controller:ManageCtrl
 * @description
 * # ManageCtrl
 * Controller of the pubriderApp
 */
angular.module('pubriderApp')
  .controller('ManageCtrl', function ($scope, $routeParams) {
      $scope.event_id = $routeParams.event_id;
  });
