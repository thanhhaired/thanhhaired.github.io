bodyonload();

function bodyonload() {
	window.setTimeout(poweron, 2000);
	window.setTimeout(batterylevel, 15000);

}

function poweron() {
	$("#container").show("fade", 2000);
	$("#touchbar").show("fade", 1000);
	document.getElementById("password").focus();
	document.getElementById("password").select();
}

function batterylevel() {
	if (parseInt(document.getElementById("batterylevel").innerHTML) == 0) {
		document.getElementById("no-battery").style.display = "flex";
	};
	if (parseInt(document.getElementById("batterylevel").innerHTML) > 0) {
		document.getElementById("batterylevel").innerHTML = (parseInt(document.getElementById("batterylevel").innerHTML) - 1);
		if (parseInt(document.getElementById("batterylevel").innerHTML) < 20) {
			document.getElementById("battery").style.backgroundImage = "url('images/icon/battery-low.png')";
		} else if (parseInt(document.getElementById("batterylevel").innerHTML) < 50) {
			document.getElementById("battery").style.backgroundImage = "url('images/icon/battery-half.png')";
		};
		window.setTimeout(batterylevel, 2000);
	};
}

// make window draggable

$('.wrapper').draggable({
	containment: "#main",
	handle: ".title-bar",
	scroll: false,
	stack: ".wrapper"
});

// brightness adjust
var a = 0;
var overlay = document.getElementById("overlay");
var brightness = document.getElementById("brightness");
var bbar = document.getElementById("bbar");

function bdown() {
	if (a <= 8) {
		a = a + 1;
		overlay.style.opacity = "0." + a;
		brightness.style.opacity = "1";
		bbar.src = "images/bar/" + a + ".jpg";
		window.setTimeout(brightnesshide, 1500);
	} else if (a = 9) {
		overlay.style.opacity = "1";
		dbrightness.style.opacity = "1";
		bbar.src = "images/bar/10.jpg";
		window.setTimeout(brightnesshide, 1500);
	}
}

function bup() {
	if (a >= 1) {
		a = a - 1;
		overlay.style.opacity = "0." + a;
		brightness.style.opacity = "1";
		bbar.src = "images/bar/" + a + ".jpg";
		window.setTimeout(brightnesshide, 1500);
	} else if (a = 0) {
		overlay.style.opacity = "0";
		brightness.style.opacity = "1";
		bbar.src = "images/bar/0.jpg";
		window.setTimeout(brightnesshide, 1500);
	}
}

function brightnesshide() {
	document.getElementById("brightness").style.opacity = "0";
	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

// open + close windows

options = {
	percent: 10
};

function docksample() {
	$("#sample").show("scale", options, 500);
};

function sampleclose() {
	$("#sample").hide("scale", options, 500);
};

function dockvlc() {
	$("#vlc").show("scale", options, 500);
};

function vlcclose() {
	$("#vlc").hide("scale", options, 500);
};

function dockeditor() {
	$("#editor").show("scale", options, 500);
};

function editorclose() {
	$("#editor").hide("scale", options, 500);
};

function docksafari() {
	$("#safari").show("scale", options, 500);
};

function safariclose() {
	$("#safari").hide("scale", options, 500);
};

function hideallwindows() {
	$("#editor").hide("scale", options, 500);
	$("#sample").hide("scale", options, 500);
	$("#vlc").hide("scale", options, 500);
	$("#safari").hide("scale", options, 500);
}

function showallwindows() {
	$("#editor").show("scale", options, 500);
	$("#sample").show("scale", options, 500);
	$("#vlc").show("scale", options, 500);
	$("#safari").show("scale", options, 500);
}

function bshowall() {
	showallwindows();
}

// windows resizable

$(function() {
	$(".resizable").resizable({
		minHeight: 150,
		minWidth: 200,
		containment: "#main",
	});
});

$(function() {
	$(".safari-resizable").resizable({
		minHeight: 250,
		minWidth: 750,
		containment: "#main",
	});
});

// taskbar - date & time
var tbd = new Date();
var tbh = tbd.getHours();
var tbm = tbd.getMinutes();
document.getElementById("date").innerHTML = tbd.toDateString() + "&nbsp;&nbsp;&nbsp;" + tbh + ":" + tbm;

// youtube player

var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('video-placeholder', {
		width: 858,
		height: 480,
		videoId: 'g_6yBZKj-eo',
		startSeconds: 0,
		setPlaybackQuality: '480',
		playerVars: {
			'controls': 0,
			'showinfo': 0,
			'rel': 0,
			'modestbranding': 1,
			'autohide': 1,
			'wmode': 'opaque',
		},
		events: {
			onReady: initialize
		}
	});
}

function initialize() {}

function bplay() {
	player.playVideo();
}

function bpause() {
	player.pauseVideo();
}

function bmute() {
	if (player.isMuted()) {
		player.unMute();
		document.getElementById("bm").style.backgroundImage = "url(images/icon/bsound.png)";
	} else {
		player.mute();
		document.getElementById("bm").style.backgroundImage = "url(images/icon/bnosound.png)";
	}
}

// button 1 : toggle css file

function togglecss() {
	var e = document.getElementById("editor-style");
	if (e.href.match("css/editor-light.css")) {
		e.href = "css/editor-dark.css";
	} else {
		e.href = "css/editor-light.css";
	}
};

// button 2 : random background color

function randombackground() {
	document.body.style.backgroundColor = rancomhexcolor1();
	document.getElementById("backgroundvalue").innerHTML = rancomhexcolor1();
}

function randomgradientbackground() {
	document.body.style.background = "linear-gradient(" + rancomhexcolor1() + ", " + rancomhexcolor2() + ")";
}

function breset() {
	document.body.style.background = "#292929";
}

// http://www.paulirish.com/2009/random-hex-color-code-snippets/

function rancomhexcolor1() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function rancomhexcolor2() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//button 4 : title task plus one

function taskplus() {
	document.getElementById("titletexta").innerHTML = (parseInt(document.getElementById("titletexta").innerHTML) + 1);
	document.getElementById("titletextb").innerHTML = (parseInt(document.getElementById("titletextb").innerHTML) + 1);
	document.getElementById("titletextc").innerHTML = (parseInt(document.getElementById("titletextc").innerHTML) + 1);
	document.getElementById("comment").style.opacity = "1";
}

// loop - file list

var filename = ["reset.css", "style.css", "function.js", "bg.jpg", "logo.jpg"];
var filetext = "";
var i;
for (i = 0; i < filename.length; i++) {
	filetext += "<p>" + filename[i] + "</p>";
}
document.getElementById("filelist").outerHTML = filetext;


// password input

function passwordcheck() {
	var password = document.getElementById("password").value;
	if (password == "rmit") {
		document.getElementById("lockscreen").style.opacity = "0";
		document.getElementById("lockscreen").style.visibility = "hidden";
		document.getElementById("password").value = "";
	} else {
		$("#password").effect("shake", 200);
		document.getElementById("password").value = "";
		document.getElementById("passwordhint").style.visibility = "visible";
	}
}

function passwordfill() {
	document.getElementById("password").value = "rmit";
}

function block() {
	$("#editor").hide("scale", options, 500);
	$("#sample").hide("scale", options, 500);
	$("#vlc").hide("scale", options, 500);
	$("#safari").hide("scale", options, 500);
	window.setTimeout(logout, 1000);
}

function logout() {
	document.getElementById("lockscreen").style.opacity = "1";
	document.getElementById("lockscreen").style.visibility = "visible";
}

function searchKeyPress(e) {
	// look for window.event in case event isn't passed in
	e = e || window.event;
	if (e.keyCode == 13) {
		document.getElementById("passwordcheck").click();
		return false;
	}
	return true;
}

// safri

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

// fullscreen

function bfullscreen() {
	screenfull.toggle($('body')[0]);
}


// generate random hex color value http://www.paulirish.com/2009/random-hex-color-code-snippets/
// replaced by gradientbg.js

//function rancomhexcolora() {
//  return '#' + Math.floor(Math.random() * 16777215).toString(16);
//}

//function rancomhexcolorb() {
//  return '#' + Math.floor(Math.random() * 16777215).toString(16);
//}

// automatic loop random background

//window.setTimeout(loopbga, 5000);

//function loopbga() {
//  document.getElementById("bggradientsvga").setAttribute("stop-color", rancomhexcolora());
//  document.getElementById("bggradientsvgb").setAttribute("stop-color", rancomhexcolorb());
//  window.setTimeout(loopbga, 5000);
//}
