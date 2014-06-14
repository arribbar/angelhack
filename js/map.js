function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(51.5, 0),
          zoom: 7
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
google.maps.event.addDomListener(window, 'load', initialize);
