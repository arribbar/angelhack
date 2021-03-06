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
	
	create_pub_crawl(user_current_position.latitude, user_current_position.longitude, crawl_name, crawl_description, crawl_organizer);		
	
	sessionStorage.setItem("channel", crawl_name);
	window.location.href = "create_message.html"
}