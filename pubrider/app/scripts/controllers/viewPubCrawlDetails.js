'use strict';

angular.module('pubriderApp')
  .controller('PubCrawlDetailsCtrl', function ($scope, $routeParams,PubNub) {
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
		marker_icon: "/images/bar.png",
		marker_position: {
			latitude: $scope.latitude ,
			longitude: $scope.longitude 
		}
	};

	$scope.join_pub_crawl = function(){
		alert("To be continued");
	};
  });
