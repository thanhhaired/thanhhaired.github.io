// MASONRY //

(function($) {
    var $grid = $('.grid');
    // Initialize Masonry
    $grid.masonry({
        itemSelector: '.grid-item', // Portfolio item
        columnWidth: '.grid-sizer',
        percentPosition: true,
        transitionDuration: 0
    });
    $(window).on('resize', function() {
        // Change Masonry on resize
        setTimeout(function() {
            $grid.masonry('layout');
            window.requestAnimationFrame(inView); // Make new items visible
        }, 1500);
    });
})(jQuery);
