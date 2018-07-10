// TOPBAR

//// GENERATE TOP BAR

document.getElementById("topbar").innerHTML = "<div class='topbar-left'>iPad <span id='topbar-wifi'></span></div><div class='topbar-center'><span id='topbar-time'></span></div><div class='topbar-right'><span id='topbar-bluetooth'></span><span id='battery-level'>100%</span><div class='battery'><span id='battery-indicator'></span></div></div>";

//// TIME

var date = new Date(); // get current date and time

document.getElementById("topbar-time").innerHTML = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2); // display HH:MM

// IPAD BUTTONS GENERATE

document.getElementById("ipad").innerHTML += "<a type='button' class='home-button' onclick='homebutton()'></a><div class='camera-front'></div>";


// APP YOUTUBE

//// YOUTUBE INNER GENERATOR

document.getElementById("youtube").innerHTML = "<div id='youtube-titlebar'></div><div id='youtube-content'><div id='youtube-main'></div><div id='youtube-sidebar'></div></div>";
document.getElementById("youtube-titlebar").innerHTML = "<div><p class='title'>YouTube</p></div><div><div class='search'>Search</div><div class='user'></div></div>";
document.getElementById("youtube-main").innerHTML = "<div id='youtube-video'></div><div class='video-info'><p class='video-title'>Overwatch Animated Short | '<span id='video-name'>Recall</span>'</p><p class='video-views'><span id='video-views'>15.612.335</span> Views</p><div class='video-like-dislike'><p id='video-like'>653K</p><p id='video-dislike'>455</p></div></div><div class='video-description'><div class='video-channel-logo'></div><div><a type='button' onclick='youtubeunsub()' id='video-subscribe' class='video-subscribe'>SUBSCRIBE</a><a type='button' onclick='youtubesub()' id='video-unsubscribe' class='video-subscribe unsub'>UNSUBSCRIBED</a><p class='video-channel-name'>PlayOverwatch</p><p class='video-upload'>Uploaded on <span id='video-upload'>March 23, 2016</span></p><p id='video-desc'>\x22Recall\x22 tells the story of Winston—a genetically engineered gorilla and brilliant scientist who longs for the days of heroism to return. In this episode, we explore Winston \x27s thoughts and memories as he wrestles with the decision to recall theagents of Overwatch, all while the forces of Talon stage an attack on his laboratory in the abandoned Watchpoint: Gibraltar.</p></div></div>";
document.getElementById("youtube-sidebar").innerHTML = "<div id='youtube-playlist-info'><p>PLAYLIST</p><p>Overwatch Animated Short</p><p>by PlayOverwatch — <span id='video-nth'>1</span>/7</p></div><div id='youtube-playlist'></div>";



//// OVERWATCH PLAYLIST VARIABLES

var owpname = ["Recall", "Alive", "Dragons", "Hero", "The Last Bastion", "Infiltration", "Rise and Shine"];
var owplink = ["recall", "alive", "dragons", "hero", "thelastbastion", "infiltration", "riseandshine"];
var owptime = ["8:01", "6:25", "8:03", "6:42", "7:22", "6:19", "9:59"];
var owpup = ["March 23, 2016",
    "April 5, 2016",
    "May 16, 2016",
    "May 22, 2016",
    "August 18, 2016",
    "November 4, 2016",
    "August 23, 2017"
];
var owpviews = ["15612335", "23154861", "51312356", "25684512", "21568459", "12335452", "16222412"];
var owplike = ["653K", "845K", "451K", "862K", "752K", "351K", "239K"];
var owpdislike = ["455", "343", "125", "665", "275", "652", "953"];
var owpdesc = ["\x22Recall\x22 tells the story of Winston—a genetically engineered gorilla and brilliant scientist who longs for the days of heroism to return. In this episode, we explore Winston's thoughts and memories as he wrestles with the decision to recall the agents of Overwatch, all while the forces of Talon stage an attack on his laboratory in the abandoned Watchpoint: Gibraltar.",
"\x22Alive\x22 weaves a tale of Widowmaker, the peerless Talon assassin who stalks her prey with deadly efficiency. In this episode, we spend a fateful night in London’s King’s Row—where you’ll discover how one death can change everything.",
"\x22Dragons\x22 explores the history of conflict between the scions of the Shimada clan: Hanzo and Genji. In this episode, we follow Hanzo as he returns to the siblings’ family home in Hanamura to seek redemption . . . and confront the ghosts of the past.",
"\x22Hero\x22 follows the masked vigilante Soldier: 76 on a personal mission to Dorado where he's set to investigate the illegal activities of the Los Muertos gang—but an unexpected complication threatens to compromise his objective.",
"\x22The Last Bastion\x22 follows the forgotten battle automaton, Bastion, as it unexpectedly reactivates after laying dormant in the wilderness for over a decade. Fascinated by its unfamiliar surroundings, the curious omnic begins to investigate, but quickly discovers its core combat programming may have a different directive...",
"\x22Infiltration\x22 follows Reaper, Widowmaker, and Sombra as they attempt to assassinate a high-priority target. But, when the operation doesn't go as planned, the Talon agents are forced to improvise...",
"In \x22Rise and Shine\x22, Mei wakes up years after being cryogenically frozen to find that Overwatch has been disbanded, the world is very different than the one she knows, and that she is the last surviving scientist at Ecopoint: Antarctica. With limited resources and time, Mei must use science to figure out a way to get help."];
var owpi, owplenght, owpitem;

//// OVERWATCH PLAYLIST SIDEBAR

for (owpi = 0, owplenght = owpname.length, owpitem = ""; owpi < owplenght; owpi++) {
    owpitem += "<a type='button' onclick='owpfunction(" + owpi + ")'><div class='item' style='background-image: url(images/youtube/overwatch/" + owplink[owpi] + ".jpg);'><div><div>Overwatch Animated Short | \x22" + owpname[owpi] + "\x22</div><div>" + owptime[owpi] + "</div></div></div></a>";
}

document.getElementById("youtube-playlist").innerHTML = owpitem;

//// OVERWATCH VIDEO BUTTON

function owpfunction(owpnumber) {
	document.getElementById("youtube-video").style.backgroundImage = "url(images/youtube/overwatch/" + owplink[owpnumber] + ".jpg)";
	document.getElementById("video-name").innerHTML = owpname[owpnumber];
	document.getElementById("video-upload").innerHTML = owpup[owpnumber];
	owpviews[owpnumber] = parseInt(owpviews[owpnumber], 10) + 1;
	document.getElementById("video-views").innerHTML = owpviews[owpnumber].toLocaleString() ;
	document.getElementById("video-like").innerHTML = owplike[owpnumber];
	document.getElementById("video-dislike").innerHTML = owpdislike[owpnumber];
	document.getElementById("video-desc").innerHTML = owpdesc[owpnumber];
	document.getElementById("video-nth").innerHTML = owpnumber + 1;
}

//// SUBSCRIBE BUTTON

function youtubeunsub() {
	document.getElementById("video-subscribe").style.display = "none";
	document.getElementById("video-unsubscribe").style.display = "block";
}

function youtubesub() {
	document.getElementById("video-subscribe").style.display = "block";
	document.getElementById("video-unsubscribe").style.display = "none";
}
