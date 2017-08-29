// VIDEO APP

// OVERWATCH PLAYLIST VARIABLES

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
var owpdesc = ["\x27Recall\x27 tells the story of Winston—a genetically engineered gorilla and brilliant scientist who longs for the days of heroism to return. In this episode, we explore Winston's thoughts and memories as he wrestles with the decision to recall the agents of Overwatch, all while the forces of Talon stage an attack on his laboratory in the abandoned Watchpoint: Gibraltar.",
"\x27Alive\x27 weaves a tale of Widowmaker, the peerless Talon assassin who stalks her prey with deadly efficiency. In this episode, we spend a fateful night in London’s King’s Row—where you’ll discover how one death can change everything.",
"\x27Dragons\x27 explores the history of conflict between the scions of the Shimada clan: Hanzo and Genji. In this episode, we follow Hanzo as he returns to the siblings’ family home in Hanamura to seek redemption . . . and confront the ghosts of the past.",
"\x27Hero\x27 follows the masked vigilante Soldier: 76 on a personal mission to Dorado where he's set to investigate the illegal activities of the Los Muertos gang—but an unexpected complication threatens to compromise his objective.",
"\x27The Last Bastion\x27 follows the forgotten battle automaton, Bastion, as it unexpectedly reactivates after laying dormant in the wilderness for over a decade. Fascinated by its unfamiliar surroundings, the curious omnic begins to investigate, but quickly discovers its core combat programming may have a different directive...",
"\x27Infiltration\x27 follows Reaper, Widowmaker, and Sombra as they attempt to assassinate a high-priority target. But, when the operation doesn't go as planned, the Talon agents are forced to improvise...",
"In \x27Rise and Shine\x27, Mei wakes up years after being cryogenically frozen to find that Overwatch has been disbanded, the world is very different than the one she knows, and that she is the last surviving scientist at Ecopoint: Antarctica. With limited resources and time, Mei must use science to figure out a way to get help."];
var owpi, owplenght, owpitem;

// OVERWATCH PLAYLIST SIDEBAR

for (owpi = 0, owplenght = owpname.length, owpitem = ""; owpi < owplenght; owpi++) {
    owpitem += "<a type='button' onclick='owpfunction(" + owpi + ")'><div class='item' style='background-image: url(images/overwatch/" + owplink[owpi] + ".jpg);'><div class='item-inner'><div class='item-title'>Overwatch Animated Short | \x22" + owpname[owpi] + "\x22</div><div class='item-time'>" + owptime[owpi] + "</div></div></div></a>";
}

document.getElementById("playlist").innerHTML = owpitem;

// OVERWATCH VIDEO button

function owpfunction(owpnumber) {
	document.getElementById("video").style.backgroundImage = "url(images/overwatch/" + owplink[owpnumber] + ".jpg)";
	document.getElementById("video-name").innerHTML = owpname[owpnumber];
	document.getElementById("video-upload").innerHTML = owpup[owpnumber];
	owpviews[owpnumber] = parseInt(owpviews[owpnumber], 10) + 1;
	document.getElementById("video-views").innerHTML = owpviews[owpnumber].toLocaleString() ;
	document.getElementById("video-like").innerHTML = owplike[owpnumber];
	document.getElementById("video-dislike").innerHTML = owpdislike[owpnumber];
	document.getElementById("video-desc").innerHTML = owpdesc[owpnumber];
}
