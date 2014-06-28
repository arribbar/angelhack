document.getElementById("name").innerHTML = sessionStorage.getItem("crawl_name")
document.getElementById("desc").innerHTML = sessionStorage.getItem("desc")
document.getElementById("org").innerHTML = sessionStorage.getItem("org")

var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();
//map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  //directionsDisplay.setMap(map);

function calcRoute() {
alert("your current location needs to be found ");
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

}