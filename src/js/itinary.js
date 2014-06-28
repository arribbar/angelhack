var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
//map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  //directionsDisplay.setMap(map);
  //alert(destination_user); 
function calcRoute(){

  directionsDisplay = new google.maps.DirectionsRenderer();
  // map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("direction-panel"));
  // var request = {
  //       origin:start,
  //       destination: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
  //       travelMode: google.maps.TravelMode.WALKING
  //     };
  var start =new google.maps.LatLng(user_current_position.latitude,user_current_position.longitude);
  var request = {
    origin: start,
    destination: destination_user,
    travelMode: google.maps.TravelMode.WALKING
  };
directionsService.route(request, function(result, status) {
        alert("result is " + JSON.stringify(result));
        if (status == google.maps.DirectionsStatus.OK) {
          

          directionsDisplay.setDirections(result);
        }
      });

}
  
google.maps.event.addDomListener(window, 'load', calcRoute);
  