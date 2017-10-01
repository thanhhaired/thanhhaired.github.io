// TOPBAR

//// GENERATE TOP BAR

document.getElementById("topbar").innerHTML = "<div class='topbar-left'>iPad <span id='topbar-wifi'></span></div><div class='topbar-center'><span id='topbar-time'></span></div><div class='topbar-right'><span id='topbar-bluetooth'></span><span id='battery-level'>100%</span><div class='battery'><span id='battery-indicator'></span></div></div>";

//// TIME

var date = new Date(); // get current date and time

document.getElementById("topbar-time").innerHTML = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2); // display HH:MM

// IPAD BUTTONS GENERATE

document.getElementById("ipad").innerHTML += "<a type='button' class='home-button' onclick='homebutton()'></a><div class='camera-front'></div>";
