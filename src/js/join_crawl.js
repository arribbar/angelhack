var join_crawl_form = document.getElementById('join_button');
if (join_crawl_form != null && join_crawl_form.attachEvent) {
    join_crawl_form.attachEvent("click", processForm);
} else {
    join_crawl_form.addEventListener("click", processForm);
}

function processForm(e) {
	var crawl_name = document.getElementById('name').innerHTML;
	var crawl_description = document.getElementById('desc').innerHTML;
	var crawl_organizer = document.getElementById('org').innerHTML;

	sessionStorage.setItem("channel", crawl_name)
	
	window.location.href = "see_messages.html"

	// getPosition(function(position) {
	// 	var long = position.coords.longitude;
	// 	var lat = position.coords.latitude;
	// create_pub_crawl(lat, long, crawl_name, crawl_description, crawl_organizer);		
	// });
}