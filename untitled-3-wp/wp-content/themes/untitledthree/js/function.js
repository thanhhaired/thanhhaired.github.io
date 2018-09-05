jQuery(document).ready(function($){

	// Start midnight
	$(document).ready(function(){
	  // Change this to the correct selector.
	  $('.nav-wrapper').midnight();
	});

	$(document).ready(function() {
	    // Transition effect for navbar
	    $(window).scroll(function() {
	        // checks if window is scrolled more than 500px, adds/removes solid class
	        if ($(this).scrollTop() > 100) {
	            $('body').addClass('is-scroll');
	        } else {
	            $('body').removeClass('is-scroll');
	        }
	    });
	});

});
