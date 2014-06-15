// form processing

var channel = sessionStorage.getItem("channel")

pubnub.subscribe({ channel : channel,
	message : function(text) {
		var elem = document.getElementById("message-area");
		elem.innerHTML = text;
	}
})
