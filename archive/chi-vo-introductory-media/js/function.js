// INSTAGRAM

var userFeed = new Instafeed({
    get: 'user',
    userId: '2209100861',
    clientId: ' 8af41cca0f19432b89f443af1c13eba3',
    accessToken: '2209100861.1677ed0.2c7cf88b4f824fc1a9ccbb82556f9dfc',
    resolution: 'standard_resolution',
    template: '<div class="instagram-wrap"><img class="instagram-img" src="{{image}}" /><p><span style="color: white">.</span>{{caption}}</p></div>',
    sortBy: 'most-recent',
    limit: 15,
    links: false
});
userFeed.run();


// PASSWORD CHECK

$("#password").keypress(function(e) {
    if (e.which == 13) {
        passwordcheck();
    }
});

function passwordcheck() {
    var password = document.getElementById('password').value;
    if (password == "tri") {
        $(document).scrollTop(0);
		$('.passcode').hide("fade", 200);
		$('.loading').hide("fade", 4000);
    } else {
        alert('Wrong Password')
    }
}

// CANVAS

var canvas,ctx;
var n = 20;
var cx,cy;
var rad = 70;

var delta = 0;
window.onload(init());

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");


    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    cx = ctx.canvas.width/2;
    cy = ctx.canvas.height/2;

    draw();
}

function draw () {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    delta += 0.05;
  /*
    console.log(cx-2*rad,cx-2*rad,
     cx+rad,cx+rad);

     */
    var gradient=ctx.createLinearGradient(
      cx-rad,cy-rad,
      cx+rad,cy+rad);
    gradient.addColorStop(0,"#FFFFFF");
    gradient.addColorStop(0.5,"#EEEEEE");
    gradient.addColorStop(1.0,"#FAFAFA");

    for(var i=0;i<n;i++){
        var pivx = (cx+rad*Math.cos(i*2*Math.PI/n + delta ));
        var pivy = (cy+rad*Math.sin(i*2*Math.PI/n + delta ));

        ctx.translate(pivx,pivy);
        ctx.rotate(i*2*Math.PI/n);
        ctx.translate(-pivx,-pivy);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.fillRect(pivx,pivy,10,50);
        //ctx.fill();
        ctx.closePath();

        ctx.translate(pivx,pivy);
        ctx.rotate(-i*2*Math.PI/n);
        ctx.translate(-pivx,-pivy);
    }

    window.requestAnimationFrame(draw);
}

//window.onload(init());
