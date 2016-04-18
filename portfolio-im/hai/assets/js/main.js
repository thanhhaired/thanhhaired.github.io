// function heightTrigger: This sets height of the element (.item) considering to width
(function($) {
    $.fn.heightTrigger = function() {
        var squareWidth = $(".item").width();
        $(".square").css('height', squareWidth);
        $(".rectangle").css('height', squareWidth * 1.5);
        $(".rectangle-big").css('height', squareWidth * 2);
    };
})(jQuery);

// function imgTrigger: change image to centered background 
(function($) {
    $.fn.imgTrigger = function() {
        var trig = '.img-trigger';
        var imgSrc = $(this).children('img').attr('src');
        $(this).css('background', 'url("' + imgSrc + '")');
        $(this).children('img').hide();
        $(this).css('background-position', '50% 0%');
    };
})(jQuery);

// Call heightTrigger
$('.item').heightTrigger();
// Call imgTrigger
$('.img-trigger').each(function() {
    $(this).imgTrigger();
});

// -----------------------------
// Isotope filtering
// -----------------------------
$(function() {
    var $container = $('.masonry');
    // init
    $container.imagesLoaded(function() {
        $container.isotope({
            itemSelector: ".item",
            transitionDuration: '0.8s',
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            },
            masonry: {
                columnWidth: ".grid-sizer",
                gutter: ".gutter-sizer"
            }
        });
    });
    // infiniteScroll
    $container.infinitescroll({
            navSelector: '.content-nav .pager', // selector for the paged navigation 
            nextSelector: '.content-nav .pager a', // selector for the NEXT link (to page 2)
            itemSelector: '.item', // selector for all items you'll retrieve
            loading: {
                finishedMsg: 'No more pages to load.',
                msgText: "Loading the next set of posts...",
                img: 'img/svg/ring.svg',
                speed: 'slow'
            }
        },
        // call Isotope as a callback
        function(newElements) {
            var $newElems = $(newElements).css({ opacity: 0 });
            $newElems.imagesLoaded(function() {
                $newElems.animate({ opacity: 1 });
                $(this).heightTrigger();
                $('.img-trigger').each(function() {
                    $(this).imgTrigger();
                });
                $container.isotope('appended', $(newElements));
            });
        }
    );
    // filter items when filter link is clicked
    $('#filter a').click(function() {
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });
});


// -----------------------------
// Top On Refresh
// -----------------------------

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
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

// -----------------------------
// Tooltip
// -----------------------------

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})


$('#toggle_fullscreen').click(function() {
    screenfull.toggle();
});
