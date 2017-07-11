//When the page loads, Fade in all divs with class hidden.
//Then Remove hidden class.
$(document).ready(function () {
    $('div.hidden').fadeIn(2000).removeClass('hidden');
});

//Fade In all h3 with class hidden.
//Remove hidden class.
$('h3.hidden').fadeIn(3000).removeClass('hidden');

//When Top links are hovered
//Slide the divs over a little bit.
//On mouse off they go back to place


//When bottom left arrow is clicked
//Page scrolls up to the top.
$("#uparrow").click(function (){
	$("html, body").animate({ scrollTop: 0 }, "slow");
  	return false;
});