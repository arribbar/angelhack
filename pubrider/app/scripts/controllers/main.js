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
  	$scope.pubCrawlsLocations=[];
    $scope.events = [
        {'name': 'event 1', 'description': 'this is a description', 'location': 'London'},
    ];

    $scope.map = {
    	center: {
    		latitude: 41,
    		longitude: -11
    	},
    	zoom: 15,
    	refresh : true,
    	pan : true,
    	control: {},
    	// markerIcon: "/images/bar.png",
    	marker_position: {
    		latitude: 41,
    		longitude: -11
    	}
	};
    
    $scope.create= function(){
    	 $scope.getPosition(function(position) {
    	  	
    	  	$scope.$apply(function(scope){
    	  		scope.map.center.latitude = position.coords.latitude;
		    	scope.map.center.longitude	= position.coords.longitude;
		    	scope.map.marker_position.latitude = position.coords.latitude;
		    	scope.map.marker_position.longitude	= position.coords.longitude;

    	  		//scope.map.markers.push(position);
	    	// scope.map.marker.longitude	= position.coords.longitude;
	    	
    	  	})
	 	});
	 	
	};
	$scope.getPosition = function(callback){
	if (navigator.geolocation) {
	    var optn = {
	            enableHighAccuracy : true,
	            timeout : Infinity,
	            maximumAge : 0
	        };                 
		// Get the user's current position
    navigator.geolocation.getCurrentPosition(callback, $scope.showError, optn);
	} else {
	    alert('Geolocation is not supported in your browser');
	}
}

    $scope.create_pub_crawl= function(){
    	$location.path('/create_pub_crawl/' + $scope.map.center.latitude +'/' + $scope.map.center.longitude);
	};



   $scope.showError = function (error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
  };
});

