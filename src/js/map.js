var map;

function setUserPositionMap(){
	var mapOptions = {
	  center: new google.maps.LatLng(user_current_position.latitude, user_current_position.longitude),
	  zoom: 15
	};

	map = new google.maps.Map(document.getElementById("map-canvas"),
	    mapOptions);	
			
	var myLatlng = new google.maps.LatLng(user_current_position.latitude,user_current_position.longitude);
	var marker = new google.maps.Marker({
	    position: myLatlng,
	    title: "You are here"
	});
	
	marker.setMap(map);


}
 	markers_dict = {}	