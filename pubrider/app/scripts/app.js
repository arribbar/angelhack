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
    'ngTouch',
    'google-maps',
    'pubnub.angular.service'
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
      .when('/create_pub_crawl/:latitude/:longitude', {
        templateUrl: 'views/create_pub_crawl.html',
        controller: 'CreatePubCrawlCtrl'
      })
      .when('/create_message/:latitude/:longitude', {
        templateUrl: 'views/create_message.html',
        controller: 'CreateMessageCtrl'
      })
      .when('/pub_crawl_details/:latitude/:longitude', {
        templateUrl: 'views/pub_crawl_details.html',
        controller: 'PubCrawlDetailsCtrl'
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
