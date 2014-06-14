'use strict';

/**
 * @ngdoc overview
 * @name pubriderApp
 * @description
 * # pubriderApp
 *
 * Main module of the application.
 */
angular
  .module('pubriderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })
      .when('/join/:event_id', {
        templateUrl: 'views/join.html',
        controller: 'JoinCtrl'
      })
      .when('/manage/:event_id', {
        templateUrl: 'views/manage.html',
        controller: 'ManageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
