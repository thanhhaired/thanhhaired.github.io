// HOME SCREEN

document.getElementById("home-screen").innerHTML = "<div id='app-screen-indicator' class='app-screen-indicator-first'><span></span><span></span></div><div id='app-screen'></div><div id='dock'></div>";

//// APP SCREEN NAVIGATION

function appscreennext() {
    document.getElementById("app-screen").style.marginLeft = "-1280px"; // move the app-screen to the right
    document.getElementById("app-screen-indicator").className = "app-screen-indicator-last";
}

function appscreenprev() {
    document.getElementById("app-screen").style.marginLeft = "0px"; // move the app-screen back to original
    document.getElementById("app-screen-indicator").className = "app-screen-indicator-first";
}

$("#app-screen").on("swipeleft", function() {
    document.getElementById("app-screen").style.marginLeft = "-1280px"; // move the app-screen to the right
    document.getElementById("app-screen-indicator").className = "app-screen-indicator-last";
});

$("#app-screen").on("swiperight", function() {
    document.getElementById("app-screen").style.marginLeft = "0px"; // move the app-screen back to original
    document.getElementById("app-screen-indicator").className = "app-screen-indicator-first";
});

//// APP GENERATE

document.getElementById("app-screen").innerHTML = "<div class='app-page' id='app-page-one'></div><div class='app-page' id='app-page-two'></div>";

var applistone = ["facetime", "calendar", "photos", "camera", "contacts", "clock", "maps", "reminders", "notes", "weather", "music", "facebook", "instagram"];
var applisttwo = ["default"];
var applistonecount;
var applisttwocount;
var apppageone = "";
var apppagetwo = "";

//////// PAGE 1

for (applistonecount = 0; applistonecount < applistone.length; applistonecount++) {
    apppageone += "<div class='icon'><span class='icon-" + applistone[applistonecount] + "'></span><span>" + applistone[applistonecount] + "</span></div>";
}

document.getElementById("app-page-one").innerHTML = apppageone;

//////// PAGE 2

for (applisttwocount = 0; applisttwocount < applisttwo.length; applisttwocount++) {
    apppagetwo += "<div class='icon'><span class='icon-" + applisttwo[applisttwocount] + "'></span><span>" + applisttwo[applisttwocount] + "</span></div>";
}

document.getElementById("app-page-two").innerHTML = apppagetwo;

//// APP CALENDAR

document.getElementsByClassName("icon-calendar")[0].innerHTML = "<span id='icon-calendar-day'>Monday</span><span id='icon-calendar-date'>23</span>";

//// CLOCK APP

document.getElementsByClassName("icon-clock")[0].innerHTML = "<div id='icon-clock'><ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li></ul><div class='hand' id='icon-clock-hours'></div><div class='hand' id='icon-clock-minutes'></div><div class='hand' id='icon-clock-seconds'></div><div class='icon-clock-black-circle'></div><div class='icon-clock-red-circle'></div></div>";

window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

(function clock() {
    var hour = document.getElementById("icon-clock-hours"),
        min = document.getElementById("icon-clock-minutes"),
        sec = document.getElementById("icon-clock-seconds");

    (function loop() {
        requestAnimFrame(loop);
        draw();
    })();

    function draw() {
        var now = new Date(),
            then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0),
            diffInMil = (now.getTime() - then.getTime()),

            h = (diffInMil / (1000 * 60 * 60)),
            m = (h * 60),
            s = (m * 60);

        sec.style.transform = "rotate(" + (s * 6) + "deg)";
        hour.style.transform = "rotate(" + (h * 30 + (h / 2)) + "deg)";
        min.style.transform = "rotate(" + (m * 6) + "deg)";
    }
})();

//// DOCK GENERATE

var docklist = ["iMessage", "safari", "youtube"];
var dockcount;
var dockcontent = "";

for (dockcount = 0; dockcount < docklist.length; dockcount++) {
    dockcontent += "<div class='icon'><span class='icon-" + docklist[dockcount] + "' type='button' onclick='openapp(" + docklist[dockcount] + ")'></span><span>" + docklist[dockcount] + "</span></div>";
}

document.getElementById("dock").innerHTML = dockcontent;
