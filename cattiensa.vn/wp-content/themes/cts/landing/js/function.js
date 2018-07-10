$(document).ready(function(){
    $(this).scrollTop(0);
});

$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionSelector: 'section',
		parallax: true,
		menu: '#landing-menu'
    });
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

// $("ul#main-menu li:first-child a").removeAttr("href");
//
// $("ul#main-menu li:first-child").click(function(){
// 	$("#products-menu").slideToggle();
// 	$(".navbar").toggleClass('products-menu-dropdown');
// 	$("ul#main-menu li:first-child").toggleClass('products-menu-arrow');
// });
//
// $("#products-menu a").click(function(){
// 	$("#products-menu").slideToggle();
// 	$(".navbar").toggleClass('products-menu-dropdown');
// 	$("ul#main-menu li:first-child").toggleClass('products-menu-arrow');
// });


$("ul#main-menu li:first-child").mouseover(function(){
	$("#products-menu").slideDown();
	$(".navbar").addClass('products-menu-dropdown');
});

$("#products-menu").mouseleave(function(){
	$("#products-menu").slideUp();
	$(".navbar").removeClass('products-menu-dropdown');
});


$("ul#main-menu li:nth-child(2)").click(function(){
	$("#mobile-products-menu").slideDown();
});

$("#mobile-products-menu span").click(function(){
	$("#mobile-products-menu").slideUp();
});

$("#btn-toggle-job-form").click(function(){
	$("#sjb-application-form").slideToggle();
});
