// form processing
var new_crawl_form = document.getElementById('create_button');
if (new_crawl_form.attachEvent) {
    new_crawl_form.attachEvent("click", processForm);
} else {
    new_crawl_form.addEventListener("click", processForm);
}

function processForm(e) {
	var crawl_name = document.getElementById('name').value;
	var crawl_description = document.getElementById('descr').value;
	var crawl_organizer = document.getElementById('organizer').value;

	getPosition(function(position) {
		var long = position.coords.longitude;
		var lat = position.coords.latitude;

		console.log(crawl_organizer)
		
		create_pub_crawl(lat, long, crawl_name, crawl_description, crawl_organizer);		
	});
	window.location.href = "index.html"
}