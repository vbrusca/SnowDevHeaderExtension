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

browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	console.log("ChangeInfoStatus: " + changeInfo.status);
	//if (changeInfo.status == 'complete') {
		console.log("onUpdated TabId: " + tabId);
		browser.tabs.executeScript(
			tabId,
			{file: "/content.js"}
		);
	//}
});

browser.tabs.onActivated.addListener(function (activeInfo) {
	console.log("onActivated TabId: " + activeInfo.tabId);
	browser.tabs.executeScript(
		activeInfo.tabId,
		{file: "/content.js"}
	);
});

browser.tabs.onCreated.addListener(function (tab) {
	console.log("TabId: " + tab.id);
	browser.tabs.executeScript(
		tab.id,
		{file: "/content.js"}
	);

});

browser.tabs.onAttached.addListener(function (tabId, attachInfo) {
	console.log("onAttached TabId: " + tabId);
	browser.tabs.executeScript(
		tab.id,
		{file: "/content.js"}
	);
});
