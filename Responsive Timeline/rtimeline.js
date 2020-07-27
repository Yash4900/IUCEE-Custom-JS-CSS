jQuery(document).ready(function( $ ){   
	/*TIMELINE BUTTONS*/
    $('#left-button').click(function () {
    	event.preventDefault();
        $('#testscroll').animate({
            scrollLeft: "-=300px"
        }, "slow");
    });
    $('#right-button').click(function () {
        event.preventDefault();
        $('#testscroll').animate({
            scrollLeft: "+=300px"
        }, "slow");
    }); 
});