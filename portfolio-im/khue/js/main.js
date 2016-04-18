/* 
  **********************************************************
  * Put this javascript after the HTML end tag </HTML>
  ********************************************************** 
*/ 

/* 
  **********************************************************
  * Toggle tranparent navbar when the user scrolls the page  
  ********************************************************** 
  */
 $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.custom-navbar').addClass('opaque');
    } else {
        $('.custom-navbar').removeClass('opaque');
    }
});


 
// -----------------------------
// Smooth Scroll
// -----------------------------

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
