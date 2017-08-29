/* get window information */

function getWindowInfo() {
    // browes informatino
    var window_w = $("#screen").width(); //window.innerWidth;
    var window_h = $("#screen").height(); //window.innerHeight;
    return Scale(window_w, window_h);
}

/* create scale */

function Scale(x, y) {
    var size = Object();
    if (typeof x != 'number' || typeof y != 'number') {
        x = parseFloat(x);
        y = parseFloat(y);
    }
    if (isNaN(x) || isNaN(y))
        throw ('error : Scale(x,y); x y must a number or number of string');
    size.x = parseInt(x);
    size.y = parseInt(y);
    return size;
}

/* create poisson */

$("#assistive-touch").draggable({
    containment: "#screen",
    start: function(event, ui) {
        console.info('drag start');
    },
    stop: function(event, ui) {
        console.info('drag stop');
        var $e = $(event.target);
        ui.helper.css('position', 'absolute');
        checkposition($e);
    },
});

/* check position */

function checkposition($e) {
    var wSize = getWindowInfo();
    var start = Scale($e[0].style.left, $e[0].style.top);
    //var elementSize = Scale(element.width, element.height);

    var end = Scale(100, 0);
    // set end left position
    var state_x_num = parseInt((start.x + $e.width() / 2) / (wSize.x / 3));
    switch (state_x_num) {
        case 0 /*L*/ :
            end.x = 1;
            break;
        case 1 /*M*/ :
            end.x = (wSize.x - $e.width()) / 2;
            break;
        case 2 /*R*/ :
            end.x = wSize.x - $e.width();
            // - the scroll bar.width
            if (document.body.scrollHeight > window.innerHeight) end.x -= 17;
            break;
        default:
            end.x = wSize.x - $e.width();
    }

    // set end top position
    var state_y_num = parseInt((start.y + $e.height() / 2) / (wSize.y / 3));
    switch (state_y_num) {
        case 0 /*H*/ :
            end.y = 0;
            break;
        case 1 /*M*/ :
            end.y = wSize.y / 2 - $e.height();
            break;
        case 2 /*B*/ :
            end.y = wSize.y - $e.height();
            if (document.body.scrollWidth > window.innerWidth) end.y -= 17;
            break;
        default:
            end.y = wSize.y - $e.height();
    }
    // ensure not in the center of screen
    if (state_x_num == 1 && state_y_num == 1) {
        end.y = wSize.y - $e.height();
    }
    // go to the position with animate

    $e.animate({
            left: end.x,
            top: end.y,
        },
        Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2)), );
}
