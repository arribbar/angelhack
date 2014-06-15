'use strict';

/**
 * @ngdoc function
 * @name pubriderApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the pubriderApp
 */
angular.module('pubriderApp')
  .controller('CreateMessageCtrl', function ($scope, $routeParams) {
      $scope.event_id = $routeParams.event_id;
      $scope.messages = [
        {'text': "hello people!"}
      ];
  });
