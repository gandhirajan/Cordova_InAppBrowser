$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady, false);
});

var ref;

function onDeviceReady() {		
     $('#inapp').click( function() 
		{	
			
		    try {				
				ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
				ref.addEventListener("exit", onBackButton, false); 
			}
			catch(err) {
				alert("Plugin Error - " + err.message);
			}
			
		});		

		function onBackButton(e) {
			alert("back button pressed");
			navigator.app.exitApp();
		}
}