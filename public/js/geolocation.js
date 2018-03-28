// var x = document.getElementById('demo');

window.onload = function() {
	navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position.coords.latitude, position.coords.longitude);
	});
};
