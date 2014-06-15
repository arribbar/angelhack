var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();
//map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  //directionsDisplay.setMap(map);
  var request = {
    origin: new google.maps.LatLng(user_current_position.latitude,user_current_position.longitude),
    destination: new google.maps.LatLng(sessionStorage.getItem("lat"),sessionStorage.getItem("long")),
    travelMode: google.maps.TravelMode.WALKING
  };
    alert("destination " + JSON.stringify(request.destination));

  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
    	alert("result " + JSON.stringify(result));
     	directionsDisplay.setDirections(result);
     	directionsDisplay.setMap(map);
     	directionsDisplay.setPanel(document.getElementById("direction-panel"));
    }
  });

  