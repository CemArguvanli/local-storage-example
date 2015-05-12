$(document).ready(function() {
	/*$('#storeme').submit(function() {

		// Grab values for from
		var name = $('input[name="name"]').val();

		// Save it
		localStorage.setItem("person", name);
	});

	// Show the info
	$('#showme').html(localStorage.getItem("person"));

	// Remove item
	$('#removeme').on('click', function() {
		localStorage.removeItem("person");
	});*/



	$('#storeme').submit(function() {

		// Grab values for from
		var name = $('input[name="name"]').val();
		var age = $('input[name="age"]').val();
		var gender = $('input[name="gender"]:checked').val();

		// Save it
		localStorage.setItem("person", name);
		localStorage.setItem("age", age);
		localStorage.setItem("gender", gender);
	});

	// Show the info
	var output = [];
	output.push(localStorage.getItem("person"));
	output.push(localStorage.getItem("age"));
	output.push(localStorage.getItem("gender"));



	$('#showme').html(output[0] + ' ' + output[1] + ' ' + output[2]);




	// Remove item
	$('#removeme').on('click', function() {
		localStorage.removeItem("person");
	});


});