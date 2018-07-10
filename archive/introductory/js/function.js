$(document).ready(function() {
    $(document).scrollTop(0);
});

$(window).load(function() {
    $('.hide').show("fade", 1000);
    $('.loading').hide("fade", 5000);
    $('.overlay').height($(document).height());
});



// JavaScript
window.sr = ScrollReveal({
    reset: true,
    duration: 1000
});

sr.reveal('.reveal');
sr.reveal('h2');
sr.reveal('.title');
sr.reveal('.item', 50);
sr.reveal('.featured', { reset: false, duration: 500 });
