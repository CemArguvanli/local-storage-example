$(document).ready(function() {
	$('#storeme').submit(function(event) {

		// Grab values for from
		var name = $('input[name="name"]').val();

		// Save it
		localStorage.setItem("person", name);
	});
});