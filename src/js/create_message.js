// form processing

var box, input, input_message, channel

var new_message_form = document.getElementById('create-message-button');
if (new_message_form.attachEvent) {
    new_message_form.attachEvent("click", processForm);
} else {
    new_message_form.addEventListener("click", processForm);
}

function processForm(e) {
 input_message = document.getElementById('input').value;
 box = document.getElementById('message-area');
 input = document.getElementById('input');

 channel = sessionStorage.getItem("newChannelName");
	console.log("Processing: using channel " + channel)
	// alert(user_current_position.latitude + " hehehe")
	pubnub.subscribe({
	  channel : channel,
	  message : function(text) {  box.innerHTML = text}
	});
	
	console.log(box.innerHTML);
	pubnub.publish({
		channel : channel,
		message : input_message 
	})
}