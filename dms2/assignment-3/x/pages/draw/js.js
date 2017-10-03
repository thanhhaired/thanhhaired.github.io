var ctx, color = "#000";

$(document).ready(function() {

    // setup a new canvas for drawing wait for device init
    setTimeout(function() {
        newCanvas();
    }, 1000);

    // reset palette selection (css) and select the clicked color for canvas strokeStyle
    $(".palette").click(function() {
        $(".palette").css("box-shadow", "0 0 0 5px #e8e7e3, 0 0 0 7px rgba(0, 0, 0, 0.0)");
        $(this).css("box-shadow", "0 0 0 5px #e8e7e3, 0 0 0 7px rgba(0, 0, 0, 0.2)");
        color = $(this).css("background-color");
        ctx.beginPath();
        ctx.strokeStyle = color;
    });

    // link the new button with newCanvas() function
    $("#new").click(function() {
        newCanvas();
    });
});

// function to setup a new canvas for drawing
function newCanvas() {
    //define and resize canvas
    $("#content").height(690);
    var canvas = '<canvas id="canvas" width="' + 375 + '" height="' + 690 + '"></canvas>';
    $("#content").html(canvas);

    // setup canvas
    ctx = document.getElementById("canvas").getContext("2d");
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;

    // setup to trigger drawing on mouse or touch
    $("#canvas").drawTouch();
    $("#canvas").drawPointer();
    $("#canvas").drawMouse();
}

// prototype to	start drawing on touch using canvas moveTo and lineTo
$.fn.drawTouch = function() {
    var start = function(e) {
        e = e.originalEvent;
        ctx.beginPath();
        x = e.changedTouches[0].pageX;
        y = e.changedTouches[0].pageY;
        ctx.moveTo(x, y);
    };
    var move = function(e) {
        e.preventDefault();
        e = e.originalEvent;
        x = e.changedTouches[0].pageX;
        y = e.changedTouches[0].pageY;
        ctx.lineTo(x, y);
        ctx.stroke();
    };
    $(this).on("touchstart", start);
    $(this).on("touchmove", move);
};

// prototype to	start drawing on pointer(microsoft ie) using canvas moveTo and lineTo
$.fn.drawPointer = function() {
    var start = function(e) {
        e = e.originalEvent;
        ctx.beginPath();
        x = e.pageX;
        y = e.pageY - 44;
        ctx.moveTo(x, y);
    };
    var move = function(e) {
        e.preventDefault();
        e = e.originalEvent;
        x = e.pageX;
        y = e.pageY - 44;
        ctx.lineTo(x, y);
        ctx.stroke();
    };
    $(this).on("MSPointerDown", start);
    $(this).on("MSPointerMove", move);
};

// prototype to	start drawing on mouse using canvas moveTo and lineTo
$.fn.drawMouse = function() {
    var clicked = 0;
    var start = function(e) {
        clicked = 1;
        ctx.beginPath();
        x = e.pageX;
        y = e.pageY - 44;
        ctx.moveTo(x, y);
    };
    var move = function(e) {
        if (clicked) {
            x = e.pageX;
            y = e.pageY - 44;
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    };
    var stop = function(e) {
        clicked = 0;
    };
    $(this).on("mousedown", start);
    $(this).on("mousemove", move);
    $(window).on("mouseup", stop);
};
