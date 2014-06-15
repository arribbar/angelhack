pubnub.history({
	channel : MAIN_CHANNEL,
	count : 40,
	callback : function(history) { 
		publish_history(history)
	}
});

function publish_history(history) {
	for (var i =0; i<history[0].length; i++) {
		var obj = history[0][i];
		console.log(obj)
		create_pub_crawl(obj.latitude, obj.longitude, obj.crawl_name, obj.description, obj.organizer);		
	}
}

function drinksForAll() {
	function normRand() {
	    var x1, x2, rad;
 
	    do {
	        x1 = 2 * Math.random() - 1;
	        x2 = 2 * Math.random() - 1;
	        rad = x1 * x1 + x2 * x2;
	    } while(rad >= 1 || rad == 0);
 
	    var c = Math.sqrt(-2 * Math.log(rad) / rad);
 
	    return (x1 * c) % 1;
	};

	var stddev = 0.1;

	for (var i =0; i<200; i++) {
		var x = 51.521
		var y = -0.08
	
		x = x + normRand() * stddev;
		y = y + normRand() * stddev;
	
		create_pub_crawl(x, y, "Crawl" + i.toString(), "", "robot");
	}	
}

