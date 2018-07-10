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



// -----------------------------
// Tooltip
// -----------------------------

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})


$('#toggle_fullscreen').click(function() {
    screenfull.toggle();
});


! function(t) { "use strict";
    var a = t("[data-slides]"),
        ni = 0,
        s = a.data("slides"),
        e = s.length,
        n = function() {
            if (ni >= a.length) { ni = 0 } else { ni++ };
            a.css("background-image", 'url("' + s[ni] + '")').show(0, function() { setTimeout(n, 5e3) }) };
    n() }(jQuery);
