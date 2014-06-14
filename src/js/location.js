if (navigator.geolocation) {
                     
// Get the user's current position
navigator.geolocation.getCurrentPosition(showPosition, showError, optn);
} else {
    alert('Geolocation is not supported in your browser');
}

function showPosition(position) {
	alert(position)
}

