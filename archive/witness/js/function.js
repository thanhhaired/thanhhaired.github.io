console.clear();

var el = {};

$('.placeholder').on('click', function(ev) {
    $('.placeholder').css('opacity', '0');
    $('.list__ul').toggle();
});

$('.list__ul a').on('click', function(ev) {
    ev.preventDefault();
    var index = $(this).parent().index();

    $('.placeholder').text($(this).text()).css('opacity', '1');

    console.log($('.list__ul').find('li').eq(index).html());

    $('.list__ul').find('li').eq(index).prependTo('.list__ul');
    $('.list__ul').toggle();

});


$('select').on('change', function(e) {

    // Set text on placeholder hidden element
    $('.placeholder').text(this.value);

    // Animate select width as placeholder
    $(this).animate({
        width: $('.placeholder').width() + 'px'
    });

});


$(function() {
    $("#datepicker").datepicker({
        dateFormat: 'dd-mm-yy'
    });
});

$(".play").click(function() {
    $('html').css("overflow", function(_, val) {
        return val == "hidden" ? "scroll" : "hidden";
    });
    $(".popup-overlay").show("fade", 250);
});

$(".popup-bg").click(function() {
    $(".popup-overlay").hide("fade", 250);
    $('html').css("overflow", function(_, val) {
        return val == "hidden" ? "scroll" : "hidden";
    });
});

$(".link-toggle-grid").click(function() {
	$(".link-toggle-grid").hide();
	$(".link-toggle-list").show();
	$(".toggle-list").hide("fade", 500);
	$(".toggle-grid").show("fade", 500);
});

$(".link-toggle-list").click(function() {
	$(".link-toggle-grid").show();
	$(".link-toggle-list").hide();
	$(".toggle-list").show("fade", 500);
	$(".toggle-grid").hide("fade", 500);
});
