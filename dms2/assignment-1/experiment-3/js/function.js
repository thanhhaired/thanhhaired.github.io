var tone = document.getElementById("tabone");
var ttwo = document.getElementById("tabtwo");
var iframe = document.getElementById("if");
var urlbar = document.getElementById("urlbar");

function tabone() {
    if (tone.className.match("tab selected")) {} else {
        tone.className = "tab selected";
        ttwo.className = "tab";
        iframe.src = "http://interactivedesignjournal.thanhhai.red/";
        urlbar.innerHTML = "interactivedesignjournal.thanhhai.red";
    }
}

function tabtwo() {
    if (ttwo.className.match("tab selected")) {} else {
        ttwo.className = "tab selected";
        tone.className = "tab";
        iframe.src = "http://thanhhai.red/";
        urlbar.innerHTML = "thanhhai.red";
    }
}

var tbd = new Date();
var tbh = tbd.getHours();
var tbm = tbd.getMinutes();
document.getElementById("date").innerHTML = tbd.toDateString() + "&nbsp;&nbsp;&nbsp;" + tbh + ":" + tbm;
