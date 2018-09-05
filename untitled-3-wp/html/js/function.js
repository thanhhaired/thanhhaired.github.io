(function() {
    // initialize the test
    var isNeeded = vhCheck('vh-test');
}());

vhCheck();

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


// $(function() {
//     $.scrollify({
//         section: ".section-wrapper",
//         sectionName: false,
//         setHeights: false,
//         scrollSpeed: 1200,
//     });
// });

function random_rgba() {
    var o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}
var colors = random_rgba();
$('.random-banner').css("background-color", colors);


var inview = new Waypoint.Inview({
    element: $('#about')[0],
    enter: function(direction) {
    },
    entered: function(direction) {
		$('.nav').addClass('nav-section-dark');
    },
    exit: function(direction) {
    },
    exited: function(direction) {
		$('.nav').removeClass('nav-section-dark');
    }
})
