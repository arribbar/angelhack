var MAIN_CHANNEL = 'london_pub_crawls'

var pubnub = PUBNUB.init({
    publish_key   : 'demo',
    subscribe_key : 'demo'
})

var user_current_position = {latitude : null, longitude : null};

getPosition(function(position){
	alert("previous user_current_position " + user_current_position.latitude + "   " + user_current_position.longitude);
	user_current_position.latitude = position.coords.latitude;
	user_current_position.longitude = position.coords.longitude;
	alert("new user_current_position " + user_current_position.latitude + "   " + user_current_position.longitude);
	
	setUserPositionMap();
});

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
	
	if (markers_dict[crawl_name] != null) {
		markers_dict[crawl_name].setPosition(place);
	
	} else {
		var marker = new google.maps.Marker({
			position : place,
			map: map,
			title: crawl_name + "\n" + desc + ". \n\nBy " + org,
			animation : google.maps.Animation.DROP,
			icon : "../img/bar.png"
		})

		markers_dict[crawl_name] = marker;
	
		google.maps.event.addListener(marker, 'click', function(event) {
			sessionStorage.setItem("lat", lat);
			sessionStorage.setItem("long", long);
			sessionStorage.setItem("crawl_name", crawl_name);
			sessionStorage.setItem("desc", desc);
			sessionStorage.setItem("org", org);
			window.location.href = "pub_crawl_details.html";
		});
		
	}
	
}

function validate_message_form() {
    var messageEntered = document.forms["message-form"]["message"].value;
    if (messageEntered==null || messageEntered=="") {
        error_handler("You must enter a message.");
    }
    else{
    	publish_message(messageEntered);
    }
}

 function publish_message(message){
 	console.log("Sending message");
    pubnub.publish({
    channel: 'demo',
    message: message,
 });
}

function error_handler(message){
	alert(message);
    return false;
}