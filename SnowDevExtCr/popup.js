function AdjustHtml() {
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
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	console.log("ChangeInfoStatus: " + changeInfo.status);
	//if (changeInfo.status == 'complete') {
			console.log("onUpdated TabId: " + tabId);
			chrome.scripting.executeScript({
				target: {tabId: tabId},
				func: AdjustHtml,
				args: null	
			});
	//}
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
	console.log("onActivated TabId: " + activeInfo.tabId);
	chrome.scripting.executeScript({
		target: {tabId: activeInfo.tabId},
		func: AdjustHtml,
		args: null	
	});
});

chrome.tabs.onCreated.addListener(function (tab) {
	console.log("TabId: " + tab.id);
	chrome.scripting.executeScript({
		target: {tabId: tab.id},
		func: AdjustHtml,
		args: null	
	});
});

chrome.tabs.onAttached.addListener(function (tabId, attachInfo) {
	console.log("onAttached TabId: " + tabId);
	chrome.scripting.executeScript({
		target: {tabId: tabId},
		func: AdjustHtml,
		args: null
	});
});
