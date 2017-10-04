// LOADING

$(window).load(function() {
	$(".iphone").css("display", "block");
    setTimeout(function() {
        $('#loading').hide('fade', 1000);
    }, 1000);
});

// GENERATE TOP BAR

$('.top-bar').html("<div id='top-bar-clock'>9:41</div><div><div class='topbar-signal'></div><div class='topbar-wifi'></div><div class='battery'><span id='battery-indicator' style='width: 60%;'></span></div></div>");

// UI


//// OPEN APP

function openapp(openappname) {
    $(openappname).show('fade', 400, homescreenoverlay);
};

function openfireworks() {
	document.getElementById("iframe-fireworks").src = "pages/fireworks/index.html";
	$("#fireworks").show('fade', 400, homescreenoverlay);
}

function homescreenoverlay() {
    $('.home-screen-overlay').show();
};

//// HOME BAR

$('.app').draggable({
    axis: 'y',
    handle: '.home-bar',
    revert: true,
    start: function(event, ui) {
        startPosition = ui.position.top;
    },
    drag: function(event, ui) {
        if (ui.position.top > startPosition)
            ui.position.top = startPosition;
        if (ui.position.top < -100) {
            $('.home-screen-overlay').hide('fade', 1000);
            $('#maps').hide('slide', {
                direction: 'up'
            }, 1000);
            $('#camera').hide('slide', {
                direction: 'up'
            }, 1000);
            $('#instagram').hide('slide', {
                direction: 'up'
            }, 1000);
            $('#facebook').hide('slide', {
                direction: 'up'
            }, 1000);
            $('#draw').hide('slide', {
                direction: 'up'
            }, 1000);
            $('#fireworks').hide('slide', {
                direction: 'up'
            }, 1000, hidefireworks);
        }
        startPosition = ui.position.top;
    }
});

function hidefireworks() {
	document.getElementById("iframe-fireworks").src = "";
}


// LOCK SCREEN

//// LOCK SCREEN HOME BAR

$('#lock-screen').draggable({
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
			$('.home-screen-overlay').hide('fade', 1000);
            $('#lock-screen').hide('slide', {
                direction: 'up'
            }, 1000);
        }
        startPosition = ui.position.top;
    }
});

//// LOCK SCREEN FLASH lock-screen-light

function lockscreenlight() {
	$(".lock-screen-light").toggleClass('active');
	$(".flashlight").toggleClass('active');
	$(".flash-light-overlay").toggleClass('active');
	$("#container").toggleClass('container-flashlight');
};

function passcodeok() {
	$('#passcode-screen').hide('fade', 750);
};

//// FACE ID

var faceid = false;

console.log("load check " + faceid);


function lockscreenfaceid() {
	faceid = !faceid;
	console.log("pre check " + faceid);
	faceidcheck();
}

function faceidcheck() {
	$(".lock-screen-camera").toggleClass('active');
	$(".lock-screen-faceid").toggleClass('active');
	$('#passcode-screen').toggle();
	console.log("post check " + faceid);
}


//// SLEEP BUTTON

$('.sleep').click(function() {
    if ($('#screen-off').is(':visible') == true) {
		console.log("wake check " + faceid);
        $('#screen-off').hide('fade', 750);
    } else {
		faceid = false;
        $('#screen-off').show('fade', 250, appcheck);
    }
});

$('#screen-off').dblclick(function() {
    if ($('#screen-off').is(':visible') == true) {
		console.log("wake check " + faceid);
        $('#screen-off').hide('fade', 750);
    }
});


function appcheck() {
	$('#lock-screen').show();
	$('.home-screen-overlay').show();
	faceidcheck();
	console.log("sleep check " + faceid);
	if ($('.lock-screen-faceid').hasClass("active") == false) {
		$('#passcode-screen').show();
	} else {
		$('#passcode-screen').hide();
	}
	// if ($('.app').is(':visible') == true) {
    //     $('.app').hide();
    // }
}

// HOME SCREEN

//// PAGINATION USING DRAGGABLE

// $('#app-screen').draggable({
//     axis: 'x',
//     revert: true,
//     drag: function(event, ui) {
//         if (ui.position.left > -120) {
//             document.getElementById('app-screen').style.marginLeft = '-375px';
//         }
// 		if (ui.position.left > 120) {
//             document.getElementById('app-screen').style.marginLeft = '0px';
//         }
//     }
// });


//// PAGINATION USING JQUERY MOBILE

$('#app-screen').on('swipeleft', function() {
    document.getElementById('app-screen').style.marginLeft = '-375px'; // move the app-screen to the right
    document.getElementById('app-page-indicator').className = 'app-page-two';
});

$('#app-screen').on('swiperight', function() {
    document.getElementById('app-screen').style.marginLeft = '0px'; // move the app-screen back to original
    document.getElementById('app-page-indicator').className = 'app-page-one';
});


// CAMERA

// Grab elements, create settings, etc.
var video = document.getElementById('camera-webcam');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });
}

// Elements for taking the snapshot
var canvas = document.getElementById('camera-gallery');
var context = canvas.getContext('2d');
var video = document.getElementById('camera-webcam');

// Trigger photo take
document.getElementById('camera-shutter').addEventListener('click', function() {
	context.drawImage(video, 150, 0, 812, 375, 0, 0, 108, 50);
});

// INSTAGRAM

var userFeed = new Instafeed({
	get: 'user',
	userId: '2209100861',
	clientId: ' 8af41cca0f19432b89f443af1c13eba3',
	accessToken: '2209100861.1677ed0.2c7cf88b4f824fc1a9ccbb82556f9dfc',
	resolution: 'standard_resolution',
	template: '<img class="instagram-img" src="{{image}}" />',
	sortBy: 'most-recent',
	limit: 15,
	links: false
});
userFeed.run();

$('.instagram-main').on("scroll", function() {
	var fromTop = $('.instagram-main').scrollTop();
	$(".instagram-header").toggleClass("active", (fromTop > 10));
});


// passcode

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
					$('#passcode-screen').hide('fade', 750);
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



// CHANGE BG

function changebg() {
	$("#home-screen").toggleClass('changebg');
	$("#lock-screen").toggleClass('changebg');
	$(".passcode-screen-bg").toggleClass('changebg');
}

// CONTROL CENTER

$('.cc-swipe').on('click', function() {
	$('#control-center').show('slide', {
		direction: 'up'
	}, 1000);
	$('.cc-overlay').show('fade', 1000);
});

$('#control-center').draggable({
    axis: 'y',
    revert: true,
    start: function(event, ui) {
        startPosition = ui.position.top;
    },
    drag: function(event, ui) {
        if (ui.position.top > startPosition)
            ui.position.top = startPosition;
        if (ui.position.top < -120) {
            $('.cc-overlay').hide('fade', 1000);
            $('#control-center').hide('slide', {
                direction: 'up'
            }, 1000);
        }
        startPosition = ui.position.top;
    }
});
