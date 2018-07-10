$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionSelector: 'section',
		parallax: true,
		menu: '#landing-menu'
    });
});

$(document).ready(function(){
    $(this).scrollTop(0);
});

// $(document).ready(function() {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 100) {
// 			$('body').removeClass('is-top');
//         } else {
// 			$('body').addClass('is-top');
//         }
//     });
// });


$(".hover-link").click(function(){
	$(".products-menu-arrow").slideToggle();
	$("#products-menu").slideToggle();
});

$("#products-menu a").click(function(){
	$(".products-menu-arrow").slideToggle();
	$("#products-menu").slideToggle();
});
