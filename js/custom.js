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

//Image Filter
$(document).ready(function () {
	$("#mainnav ul li a").click(function (){
		var category = $(this).attr("class");

		if (category == "all" ){
			$("#imgcontainer img").addClass("hidden");
			setTimeout(function (){
				$("#imgcontainer img").removeClass("hidden");
			});
		}
		else {
			$("#imgcontainer img").addClass("hidden");
			setTimeout(function(){
				$("."+category).removeClass("hidden");
			});
		}
	});
});
