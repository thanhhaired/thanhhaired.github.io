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
