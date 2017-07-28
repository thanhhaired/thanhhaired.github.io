    //button 4 : title task plus one
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

    var player;

    function onYouTubeIframeAPIReady() {
    	player = new YT.Player('video-placeholder', {
    		width: 1280,
    		height: 720,
    		videoId: 'g_6yBZKj-eo',
    		startSeconds: 0,
    		setPlaybackQuality: 'hd1080',
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

    function initialize() {

    }

    function bplay() {
    	player.playVideo();
    }

    function bpause() {
    	player.pauseVideo();
    }