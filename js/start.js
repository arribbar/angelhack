var MAIN_CHANNEL = 'london_pub_crawls'

var mapOptions = {
  center: new google.maps.LatLng(51.5, 0),
  zoom: 7
};

var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);


var pubnub = PUBNUB.init({
    publish_key   : 'demo',
    subscribe_key : 'demo'
})


// returns an event id (used as channel name)
function create_pub_crawl(lat, long, crawl_name, description, organizer) {
	pubnub.publish( {
		channel : MAIN_CHANNEL,
		message : { 
			'latitude' : lat,
			'longitude' : long,
			'crawl_name' : crawl_name,
			'description' : description,
			'organizer' : organizer
		}
	});
	
}


pubnub.subscribe( {
	channel : MAIN_CHANNEL,
	message : function(m) { add_pub_crawl(m) }
});

function add_pub_crawl(message) {
	console.log("Received message, adding to map..");
	lat = message.latitude
	long = message.longitude
	crawl_name = message.crawl_name
	desc = message.description
	org = message.organizer
	
	var place = new google.maps.LatLng(lat, long);
	var marker = new google.maps.Marker({
		position : place,
		map: map,
		title: crawl_name + "\n" + desc + ". \n\nBy " + org,
		animation : google.maps.Animation.DROP
	})
}


