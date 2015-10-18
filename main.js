// this fades the title
$(document).ready(function() {
	$('h1').animate( {
		opacity: 0.5,
	}, 4000);
});

// this logs a message in console when you click the button
$(document).ready('#button').click(function() {
	console.log('You clicked it!');
});

// makes all the h2 titles disappear
$(document).ready(function() {
	$('h2').slideUp(4000);
});

// hides all the paragraph text
$(document).ready(function() {
	$('p').hide();
});