try {
	d = document;
	console.log("Location: " + d.location.href);
	if(d.location.href.indexOf("service-now") != -1) {
		console.log("Could find service-now in the URL!");
		d.getElementById('update_set_picker_select').style.width = "250px";
		d.getElementById('update_set_picker_select').style.marginLeft = "-350px";
        		
		d.getElementById('application_picker_select').style.width = "250px";
		d.getElementById('application_picker_select').style.marginLeft = "-200px";
	} else {
		console.log("Could not find service-now in the URL!");
	}
} catch (e) {
	//do nothing
}