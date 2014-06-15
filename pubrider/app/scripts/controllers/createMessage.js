'use strict';

/**
 * @ngdoc function
 * @name pubriderApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the pubriderApp
 */
angular.module('pubriderApp')
  .controller('CreateMessageCtrl', function ($scope,$routeParams,PubNub) {
  	PubNub.init({publish_key:"demo", subscribe_key:"demo"});
  	$scope.selected_channel = "london_pub_crawls";
  	  $scope.latitude = $routeParams.latitude;
  	  $scope.longitude = $routeParams.longitude;

  	  $scope.map = {
    	center: {
    		latitude: $scope.latitude ,
    		longitude: $scope.longitude 
    	},
    	zoom: 15,
    	refresh : true,
    	pan : true,
    	control: {},
    	marker_position: {
    		latitude: $scope.latitude ,
    		longitude: $scope.longitude 
    	}
	};

  	$scope.validate_message_form = function () {
	    if ($scope.message_to_broadcast==null || $scope.message_to_broadcast=="") {
	        $scope.error_handler("You must enter a message.");
	    }
	    else{
	    	$scope.publish_message($scope.message_to_broadcast);
	    }
	}

 	$scope.publish_message = function(messageToBroadcast){
	    PubNub.ngPublish({
		    channel: $scope.selected_channel,
		    message: messageToBroadcast
	 	});
	}

$scope.error_handler = function(message){
	alert(message);
    return false;
}
  });
