'use strict';

/**
 * @ngdoc function
 * @name pubriderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pubriderApp
 */
angular.module('pubriderApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.events = [
        {'name': 'event 1', 'description': 'this is a description', 'location': 'London'},
    ];
    $scope.join = function(event_id) {
        $location.path('/join/' + event_id);
    };
  });
