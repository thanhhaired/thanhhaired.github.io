// TOPBAR

//// TIME

var date = new Date(); // get current date and time

document.getElementById("topbar-time").innerHTML = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2); // display HH:MM

// HOME SCREEN

//// APP SCREEN NAVIGATION

function appscreennext() {
    document.getElementById("app-screen").style.marginLeft = "-1280px"; // move the app-screen to the right
    document.getElementById("app-screen-indicator").className = "app-screen-indicator-last";
}

function appscreenprev() {
    document.getElementById("app-screen").style.marginLeft = "0px"; // move the app-screen back to original
    document.getElementById("app-screen-indicator").className = "app-screen-indicator-first";
}

$.mobile.loadingMessage = false;

$("#app-screen").on("swipeleft",function(){
	document.getElementById("app-screen").style.marginLeft = "-1280px"; // move the app-screen to the right
    document.getElementById("app-screen-indicator").className = "app-screen-indicator-last";
});

$("#app-screen").on("swiperight",function(){
	document.getElementById("app-screen").style.marginLeft = "0px"; // move the app-screen back to original
    document.getElementById("app-screen-indicator").className = "app-screen-indicator-first";
});

// FUNCTION BUTTONS

//// NAVIGATION BAR

function fbexpand() {
    document.getElementById("function-buttons").className = "selected";
    document.getElementById("fbexpand").style.display = "none";
    document.getElementById("fbclose").style.display = "block";
}

function fbclose() {
    document.getElementById("function-buttons").className = "";
    document.getElementById("fbclose").style.display = "none";
    document.getElementById("fbexpand").style.display = "block";
    document.getElementById("ipad-wrapper").className = "";
}

function fbtiltleft() {
    document.getElementById("ipad-wrapper").className = "tilt-left";
}

function fbtiltright() {
    document.getElementById("ipad-wrapper").className = "tilt-right";
}
