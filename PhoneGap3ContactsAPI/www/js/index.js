document.addEventListener("deviceready", onDeviceReady, false);

$(document).on("pageshow", function(){
	if($("#contactsList").length == 1){
		$("body").addClass('ui-disabled').css("background", "#000");
		$.mobile.loading("show");
		var options = new ContactFindOptions();
		options.filter = "";
		options.multiple = true;
		var filter = ["displayName", "phoneNumbers"];
		navigator.contacts.find(filter, onSuccess)
	}
})