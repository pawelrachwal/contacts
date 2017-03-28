function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
	var options = { frequency: 100 };

	navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

