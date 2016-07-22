$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {		
     $('#inapp').click( function() 
		{	
		    try {				
				var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
			}
			catch(err) {
				alert("Plugin Error - " + err.message);
			}
			
		});		
}