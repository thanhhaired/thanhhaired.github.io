$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    x[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

function timeout() {
    setTimeout(function() {
        showDivs(slideIndex += 1);
        timeout();
    }, 10000);
}


$(document).ready(function() {
    // Transition effect for navbar
    $(window).scroll(function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 100) {
            $('#nav').addClass('scroll');
            $('.footer').addClass('scroll');
            $('.intro').addClass('scroll');
            $('.big-logo').addClass('scroll');
            $('.logo').addClass('scroll');
        } else {
            $('#nav').removeClass('scroll');
            $('.footer').removeClass('scroll');
            $('.intro').removeClass('scroll');
            $('.big-logo').removeClass('scroll');
            $('.logo').removeClass('scroll');
        }
    });
});

$(function() {
    $.scrollify({
        section: "section",
		sectionName : "section-name",
        scrollSpeed: 1000,
        setHeights: false,
    });
});

$(window).on('load', function() {
  setTimeout(function() {
      $(window).scrollTop(0);
  });
});

$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
