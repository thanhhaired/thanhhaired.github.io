// TOPBAR

//// GENERATE TOP BAR

document.getElementById("topbar").innerHTML = "<div class='topbar-left'>iPad <span id='topbar-wifi'></span></div><div class='topbar-center'><span id='topbar-time'></span></div><div class='topbar-right'><span id='topbar-bluetooth'></span><span id='battery-level'>100</span>%<div class='battery'><span id='battery-indicator'></span></div></div>";

function bodyonload() {
    window.setTimeout(batterylevel, 10000);

}

function batterylevel() {
    if (parseInt(document.getElementById("battery-level").innerHTML) == 0) {
        document.getElementById("screenoff").style.display = "block";
    };
    if (parseInt(document.getElementById("battery-level").innerHTML) > 0) {
		document.getElementById("battery-level").innerHTML = (parseInt(document.getElementById("battery-level").innerHTML) - 1);
		document.getElementById("battery-indicator").style.width = (parseInt(document.getElementById("battery-level").innerHTML)) + "%";
		if (parseInt(document.getElementById("battery-level").innerHTML) < 50){
			document.getElementById("battery-indicator").style.backgroundColor = "red";
		}
        window.setTimeout(batterylevel, 2000);
    };
}


//// TIME

var date = new Date(); // get current date and time

document.getElementById("topbar-time").innerHTML = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2); // display HH:MM
document.getElementById("lockscreen-clock").innerHTML = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2); // display HH:MM


// IPAD 3D

document.getElementById("ipad-3d").outerHTML = "<div id='ipad-right'><div class='speaker'><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><div class='lighting-port'></div><div class='speaker'><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div><div id='ipad-left'></div><div id='ipad-back'><div class='camera-back'></div></div><div id='ipad-behind'></div>";

// IPAD BUTTONS GENERATE

document.getElementById("ipad").innerHTML += "<a type='button' class='home-button' id='home-button' onclick='homebutton()'><a type='button' class='home-button' id='screenoff-button' onclick='screenoffbutton()'><a type='button' class='home-button' id='lockscreen-button' onclick='lockscreenbutton()'></a><div class='camera-front'></div>";

// HOME BUTTONS

function homebutton() {
    $("#youtube").hide("fade", 400);
    $("#safari").hide("fade", 400);
    $("#iMessage").hide("fade", 400);
    document.getElementById("topbar").className = "dark";
}

function openapp(openappname) {
    $(openappname).show("fade", 400);
    document.getElementById("topbar").className = "";
}

// POWER BUTTON

function powerbuttonon() {
    $("#screenoff").show("fade", 200);
    $("#lockscreen-text").hide();
    $("#lockscreen").show("fade", 250);
    $("#passcode").show("fade", 250);
    document.getElementById("power-button-on").style.display = "none";
    document.getElementById("power-button-off").style.display = "block";
    document.getElementById("topbar-time").style.display = "none";
    document.getElementById("home-button").style.display = "none";
    document.getElementById("screenoff-button").style.display = "block";
    document.getElementById("lockscreen-button").style.display = "none";
    document.getElementById("lockscreen").style.display = "block";
    document.getElementById("passcode").style.display = "block";
	document.getElementById("topbar").className = "dark";
}

function powerbuttonoff() {
    $("#screenoff").hide("fade", 400);
    $("#lockscreen-text").show("fade", 1000);
    document.getElementById("power-button-off").style.display = "none";
    document.getElementById("power-button-on").style.display = "block";
    document.getElementById("topbar-time").style.display = "none";
    document.getElementById("home-button").style.display = "none";
    document.getElementById("screenoff-button").style.display = "none";
    document.getElementById("lockscreen-button").style.display = "block";
	document.getElementById("topbar").className = "dark";
}

function lockscreenbutton() {
    $("#lockscreen").hide("fade", 400);
    document.getElementById("topbar-time").style.display = "block";
	document.getElementById("topbar").className = "dark";
}

function screenoffbutton() {
    $("#screenoff").hide("fade", 400);
    $("#lockscreen-text").show("fade", 1000);
    document.getElementById("power-button-off").style.display = "none";
    document.getElementById("power-button-on").style.display = "block";
    document.getElementById("topbar-time").style.display = "none";
    document.getElementById("home-button").style.display = "none";
    document.getElementById("screenoff-button").style.display = "none";
    document.getElementById("lockscreen-button").style.display = "block";
	document.getElementById("topbar").className = "dark";
}

(function() {
    var input = '',
        correct = '1234';
    var dots = document.querySelectorAll('.dot'),
        numbers = document.querySelectorAll('.number');
    dots = Array.prototype.slice.call(dots);
    numbers = Array.prototype.slice.call(numbers);
    numbers.forEach(function(number, index) {
        number.addEventListener('click', function() {
            number.className += ' grow';
            input += index + 1;
            dots[input.length - 1].className += ' active';
            if (input.length >= 4) {
                if (input !== correct) {
                    $("#dots").effect("shake", 500);
                } else {
                    $("#passcode").hide("fade", 400);
                    document.getElementById("home-button").style.display = "block";
                    document.getElementById("screenoff-button").style.display = "none";
                    document.getElementById("lockscreen-button").style.display = "none";
                }
                setTimeout(function() {
                    dots.forEach(function(dot, index) {
                        dot.className = 'dot';
                    });
                    input = '';
                }, 900);
                setTimeout(function() {
                    document.body.className = '';
                }, 1000);
            }
            setTimeout(function() {
                number.className = 'number';
            }, 1000);
        });
    });
}());



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
    document.getElementById("screen").className = "";
    document.getElementById("screencrack").style.display = "none";

}

function fbtiltleft() {
    document.getElementById("ipad-wrapper").className = "tilt-left";
}

function fbtiltright() {
    document.getElementById("ipad-wrapper").className = "tilt-right";
}
