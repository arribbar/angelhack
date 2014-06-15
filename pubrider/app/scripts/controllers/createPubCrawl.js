'use strict';

/**
 * @ngdoc function
 * @name pubriderApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the pubriderApp
 */
angular.module('pubriderApp')
  .controller('CreatePubCrawlCtrl', function ($scope,$routeParams,PubNub) {
  	PubNub.init({publish_key:"demo", subscribe_key:"demo"});
  	$scope.selected_channel = "demo";
  	$scope.pub=[];
  	  $scope.pub.latitude = $routeParams.latitude;
  	  $scope.pub.longitude = $routeParams.longitude;
      $scope.messages = [
        {'text': "hello people!"}

      ];

		$scope.pub_name = "";
			$scope.pub_description = "";
			 $scope.pub_organizer = "";

    $scope.map = {
    	center: {
    		latitude: $scope.pub.latitude ,
    		longitude: $scope.pub.longitude 
    	},
    	zoom: 15,
    	refresh : true,
    	pan : true,
    	control: {},
    	marker_icon: "/images/bar.png",
    	marker_position: {
    		latitude: $scope.pub.latitude ,
    		longitude: $scope.pub.longitude 
    	}
	};

$scope.processForm = function(e){
	alert("hi");



	console.log(crawl_organizer);
		
	// create_pub_crawl($scope.latitude, $scope.longitude, crawl_name, crawl_description, crawl_organizer);		
	
};

$scope.publish = function(){
	PubNub.ngPublish({
		channel : $scope.selected_channel,
		message : { 
			'latitude' : $scope.pub.latitude,
			'longitude' : $scope.pub.longitude,
			'crawl_name' : $scope.pub.name,
			'description' : $scope.pub.description,
			'organizer' : $scope.pub.organizer
		}
	});
};

  });
