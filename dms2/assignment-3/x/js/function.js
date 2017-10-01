// // Grab elements, create settings, etc.
// var video = document.getElementById('camera-webcam');
//
// // Get access to the camera!
// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     // Not adding `{ audio: true }` since we only want video now
//     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
//         video.src = window.URL.createObjectURL(stream);
//         video.play();
//     });
// }
//
// // Elements for taking the snapshot
// var canvas = document.getElementById('camera-gallery');
// var context = canvas.getContext('2d');
// var video = document.getElementById('camera-webcam');
//
// // Trigger photo take
// document.getElementById("camera-shutter").addEventListener("click", function() {
// 	context.drawImage(video, 150, 0, 812, 375, 0, 0, 108, 50);
// });

// $(".home-bar").click(function() {
//     $(".app").hide("slide", {
//         direction: "up"
//     }, 1000);
// });

$(".app").draggable({
    axis: 'y',
    handle: '.home-bar',
    revert: true,
    start: function(event, ui) {
        startPosition = ui.position.top;
    },
    drag: function(event, ui) {
        if (ui.position.top > startPosition)
            ui.position.top = startPosition;
        if (ui.position.top < -120) {
			$("#maps").hide("slide", {direction: "up"}, 1000);
			$("#camera").hide("slide", {direction: "up"}, 1000);
        }
		startPosition = ui.position.top;
    }
});

$(".sleep").click(function() {
    if ($('#screen-off').is(':visible') == true) {
        $("#screen-off").hide("fade", 750);
    } else {
        $("#screen-off").show("fade", 250, appcheck);
    }
});

function appcheck() {
    if ($('.app').is(':visible') == true) {
        $(".app").hide();
    }
}

function openapp(openappname) {
    $(openappname).show("fade", 400);
}

$("#app-screen").on("swipeleft", function() {
    document.getElementById("app-screen").style.marginLeft = "-375px"; // move the app-screen to the right
    document.getElementById("app-page-indicator").className = "app-page-two";
});

$("#app-screen").on("swiperight", function() {
    document.getElementById("app-screen").style.marginLeft = "0px"; // move the app-screen back to original
    document.getElementById("app-page-indicator").className = "app-page-one";
});
