var map

getPosition(function(position) {
	var lat = position.coords.latitude;
	var long = position.coords.longitude;

	var mapOptions = {
	  center: new google.maps.LatLng(lat, long),
	  zoom: 6
	};

	map = new google.maps.Map(document.getElementById("map-canvas"),
	    mapOptions);	
			
	var myLatlng = new google.maps.LatLng(lat,long)
	var marker = new google.maps.Marker({
	    position: myLatlng,
	    title: "You are here"
	});
	
	marker.setMap(map);
});

markers_dict = {}