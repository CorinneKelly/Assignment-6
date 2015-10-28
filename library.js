// JQuery Library
// To  select an element use the below command
$("x")

// function - elements
function $(selector) {
	var result;
// Find elements in DOM that match `selector`
// Pass each element into `result`
	return result;
}

// Some basics
$('body').hide();
$('body').show();
//numbers added inside () are represented in milli seconds
$('h1').fadeOut();
$('h1').fadeIn();
$('.class').slideUp();
$('.class').slideDown();

// ex of adding multiple functions inside of a jquery command
$('.class').animate ({
	opacity: 0.5;
	width: 70%;
}, 2000 );

// event functions
$('.class').click(function() {
	console.log('Mouse click detected.');
});

//button click function
<script>
	$('button').click(function() {
		console.log('Hello world!');
	});
</script>

<button>Click me</button>