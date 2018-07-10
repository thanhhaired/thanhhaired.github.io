

document.getElementById("iMessage").innerHTML = "<div><div><div><span>Messages</span><span>Search</span></div><div><div><p>Ex</p></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div><div><div><span>Ex</span></div><div><div id='iMessage-text'><div class='message left'><div class='message-text'>I hate you!</div></div><div class='message right'><div class='message-text'>Please ..</div><div class='message-text'>We can work through this ..</div></div><div class='message left'><div class='message-text'>Never text me ever again!</div></div></div><textarea id='iMessage-input' placeholder='Message'></textarea><div id='iMessage-send' onclick='imsend()'></div></div></div></div><div id='keyboard-wrapper'></div>";

//// SEND MESSAGE BUTTON

function imsend() {
  var imtext = $('#iMessage-input').val();
  $('#iMessage-input').val('');

  if (imtext != '') {
	  imadd(1, imtext);
	   window.setTimeout(imreply, 1200);
  };

  $('#iMessage-text').animate({ scrollTop: $('body').height() }, 600);

  return false;
}

//// ADDING MESSAGE

function imadd(people, msg) {

  var side = 'right';
  var $_phone = $('#iMessage-text');
  var $_lastMessage = $('#iMessage-text .message:last');

  if (people == 1) side = 'right';
  if (people == 2) side = 'left';

  if ($_lastMessage.hasClass(side)) {

    $_lastMessage.append(
      $('<div>').addClass('message-text').text(msg)
    )

  } else {

    $_phone.append(
      $('<div>').addClass('message '+side).append(
        $('<div>').addClass('message-text').text(msg)
      )
    )

  }

}

function imreply() {
	var imlist = ["I told you to stop texting me!!!",
				"OMG!!! Please stop texting me!",
				"Didn't you know how to read?",
				"One more message and I'm going block you",
				"FFS..",
				"Yeeez..",
				"Damn it! You don't know how to quit aren't you.",
				"KYS",
				"Stop it! We're done.",
				"Holyshit! GTFO"];
	randomim = Math.floor(Math.random()*4);
	randommesss = imlist[randomim];
	imadd(2, randommesss);
	$('#iMessage-text').animate({ scrollTop: $('body').height() }, 600);
}

//// SEND MESSAGE WHEN PRESS ENTER

$("#iMessage-input").on("keypress",function(e) {
    var key = e.keyCode;

    // If the user has pressed enter
    if (key == 13) {
        imsend();
        return false;
    }
    else {
        return true;
    }
});


// KEYBOARD

document.getElementById("keyboard-wrapper").innerHTML = "<div id='keyboard'><!--lowercase keyboard--><div id='lowercase'><div class='row'><div class='key white'><span>q</span></div><div class='key white'><span>w</span></div><div class='key white'><span>e</span></div><div class='key white'><span>r</span></div><div class='key white'><span>t</span></div><div class='key white'><span>y</span></div><div class='key white'><span>u</span></div><div class='key white'><span>i</span></div><div class='key white'><span>o</span></div><div class='key white'><span>p</span></div></div><div class='row'><div class='key white'><span>a</span></div><div class='key white'><span>s</span></div><div class='key white'><span>d</span></div><div class='key white'><span>f</span></div><div class='key white'><span>g</span></div><div class='key white'><span>h</span></div><div class='key white'><span>j</span></div><div class='key white'><span>k</span></div><div class='key white'><span>l</span></div></div><div class='row'><div class='key gray'><span>&#8679;</span></div><div class='key white'><span>z</span></div><div class='key white'><span>x</span></div><div class='key white'><span>c</span></div><div class='key white'><span>v</span></div><div class='key white'><span>b</span></div><div class='key white'><span>n</span></div><div class='key white'><span>m</span></div><div class='key gray'><span>&#9003;</span></div></div><div class='row'><div class='key gray'><span>123</span></div><div class='key white'><span>space</span></div><div class='key gray'><span>return</span></div></div></div><!--uppercase keyboard--><div id='uppercase'><div class='row'><div class='key white'><span>Q</span></div><div class='key white'><span>W</span></div><div class='key white'><span>E</span></div><div class='key white'><span>R</span></div><div class='key white'><span>T</span></div><div class='key white'><span>Y</span></div><div class='key white'><span>U</span></div><div class='key white'><span>I</span></div><div class='key white'><span>O</span></div><div class='key white'><span>P</span></div></div><div class='row'><div class='key white'><span>A</span></div><div class='key white'><span>S</span></div><div class='key white'><span>D</span></div><div class='key white'><span>F</span></div><div class='key white'><span>G</span></div><div class='key white'><span>H</span></div><div class='key white'><span>J</span></div><div class='key white'><span>K</span></div><div class='key white'><span>L</span></div></div><div class='row'><div class='key gray' style='background:#fff;'><span>&#11014;</span></div><div class='key white'><span>Z</span></div><div class='key white'><span>X</span></div><div class='key white'><span>C</span></div><div class='key white'><span>V</span></div><div class='key white'><span>B</span></div><div class='key white'><span>N</span></div><div class='key white'><span>M</span></div><div class='key gray'><span>&#9003;</span></div></div><div class='row'><div class='key gray'><span>123</span></div><div class='key white'><span>space</span></div><div class='key gray'><span>return</span></div></div></div><!--numbers and symbols keyboard--><div id='numbers'><div class='row'><div class='key white'><span>1</span></div><div class='key white'><span>2</span></div><div class='key white'><span>3</span></div><div class='key white'><span>4</span></div><div class='key white'><span>5</span></div><div class='key white'><span>6</span></div><div class='key white'><span>7</span></div><div class='key white'><span>8</span></div><div class='key white'><span>9</span></div><div class='key white'><span>0</span></div></div><div class='row'><div class='key white'><span>-</span></div><div class='key white'><span>/</span></div><div class='key white'><span>:</span></div><div class='key white'><span>;</span></div><div class='key white'><span>(</span></div><div class='key white'><span>)</span></div><div class='key white'><span>$</span></div><div class='key white'><span>&amp;</span></div><div class='key white'><span>@</span></div><div class='key white'><span>'</span></div></div><div class='row'><div class='key gray gray3r'><span>#+=</span></div><div class='key white symbol3'><span>.</span></div><div class='key white symbol3'><span>,</span></div><div class='key white symbol3'><span>?</span></div><div class='key white symbol3'><span>!</span></div><div class='key white symbol3'><span>'</span></div><div class='key gray gray3'><span>&#9003;</span></div></div><div class='row'><div class='key gray'><span>ABC</span></div><div class='key white'><span>space</span></div><div class='key gray'><span>return</span></div></div></div><!--additional symbols keyboard--><div id='symbols'><div class='row'><div class='key white'><span>[</span></div><div class='key white'><span>]</span></div><div class='key white'><span>{</span></div><div class='key white'><span>}</span></div><div class='key white'><span>#</span></div><div class='key white'><span>%</span></div><div class='key white'><span>^</span></div><div class='key white'><span>*</span></div><div class='key white'><span>+</span></div><div class='key white'><span>=</span></div></div><div class='row'><div class='key white'><span>_</span></div><div class='key white'><span>\x5c</span></div><div class='key white'><span>|</span></div><div class='key white'><span>~</span></div><div class='key white'><span>&lt;</span></div><div class='key white'><span>&gt;</span></div><div class='key white'><span>&euro;</span></div><div class='key white'><span>&pound;</span></div><div class='key white'><span>&yen;</span></div><div class='key white'><span>&bull;</span></div></div><div class='row'><div class='key gray gray3r'><span>123</span></div><div class='key white symbol3'><span>.</span></div><div class='key white symbol3'><span>,</span></div><div class='key white symbol3'><span>?</span></div><div class='key white symbol3'><span>!</span></div><div class='key white symbol3'><span>'</span></div><div class='key gray gray3'><span>&#9003;</span></div></div><div class='row'><div class='key gray'><span>ABC</span></div><div class='key white'><span>space</span></div><div class='key gray'><span>return</span></div></div></div></div>";


var isShift = false,
	capsLock = false,
	isNumSymbols = false,
	isMoreSymbols = false;

var kbdMode = ["lowercase", "uppercase", "numbers", "symbols"];

/* typing */
for (var i = 0; i < kbdMode.length; ++i) {
	$("#" + kbdMode[i] + " .row .white:not(:last)").mousedown(function(){
		$("textarea").append($(this).find("span").html().substring(0,1));
	});
    $("#" + kbdMode[i] + " .row .white:last").mousedown(function(){
        $("textarea").append("&#32;");
    });
}
$(".white").mouseup(function(){
    $(this).find("span").css("color", "#000");
    if (isShift == true && capsLock == false) {
    	$("#lowercase").css("display", "block");
    	$("#uppercase").css("display", "none");
        isShift = false;
    }
});

/* toggle shift */
// lowercase to uppercase
$("#lowercase .row:eq(2) .gray:eq(0)").click(function(){
    if (isShift == false) {
    	$("#lowercase").css("display", "none");
    	$("#uppercase").css("display", "block");
        isShift = true;
    }
});
// uppercase to lowercase
$("#uppercase .row:eq(2) .gray:eq(0)").click(function(){
    if (isShift == true) {
    	$("#lowercase").css("display", "block");
    	$("#uppercase").css("display", "none");
        isShift = false;
    }
});
// caps lock on
$("#uppercase .row:eq(2) .gray:eq(0)").dblclick(function(){
    if (capsLock == false) {
    	$("#lowercase").css("display", "none");
    	$("#uppercase").css("display", "block");
        $(this).children("span").html("&#8682;");
        capsLock = true;
    }
});
// caps lock off
$("#uppercase .row:eq(2) .gray:eq(0)").click(function(){
    if (capsLock == true) {
        $("#lowercase").css("display", "block");
    	$("#uppercase").css("display", "none");
        $(this).children("span").html("&#11014;");
        capsLock = false;
    }
});

/* backspace */
var backspace = function(){
    $("textarea").html($("textarea").html().substring(0,$("textarea").html().length-1));
};
for (var j = 0; j < kbdMode.length; ++j) {
	$("#" + kbdMode[j] + " .row:eq(2) .key:last").click(backspace);
};

/* toggle numbers */
// lowercase/uppercase to numbers
for (var k = 0; k < kbdMode.length-2; ++k) {
	$("#" + kbdMode[k] + " .row:eq(3) .gray:eq(0)").click(function(){
    	if (isNumSymbols == false) {
    		$("#numbers").css("display", "inherit");
    		$("#lowercase").css("display", "none");
            $("#uppercase").css("display", "none");
            $("#uppercase .row:eq(2) .gray:eq(0)").children("span").html("&#11014;");
        	isNumSymbols = true;
        	isShift = false;
            capsLock = false;
    	}
	});
}
// numbers to lowercase
$("#numbers .row:eq(3) .gray:eq(0)").click(function(){
    if (isNumSymbols == true) {
    	$("#numbers").css("display", "none");
    	$("#lowercase").css("display", "block");
        isNumSymbols = false;
    }
});

/* toggle symbols */
// numbers to symbols
$("#numbers .row:eq(2) .gray:eq(0)").click(function(){
    if (isMoreSymbols == false) {
    	$("#numbers").css("display", "none");
        $("#symbols").css("display", "block");
        isMoreSymbols = true;
    }
});
// symbols to numbers
$("#symbols .row:eq(2) .gray:eq(0)").click(function(){
    if (isMoreSymbols == true) {
    	$("#numbers").css("display", "block");
        $("#symbols").css("display", "none");
        isMoreSymbols = false;
    }
});
// symbols to lowercase
$("#symbols .row:eq(3) .gray:eq(0)").click(function(){
    if (isMoreSymbols == true) {
    	$("#lowercase").css("display", "block");
        $("#symbols").css("display", "none");
        isMoreSymbols = false;
    }
});

/* return (line break) */
for (var l = 0; l < kbdMode.length; ++l) {
	$("#" + kbdMode[l] + " .row:eq(3) .gray:eq(1)").click(function(){
    	$("textarea").append("&#10;");
	});
}
