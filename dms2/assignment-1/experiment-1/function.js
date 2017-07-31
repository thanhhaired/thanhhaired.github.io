    // button 1 : toggle css file

    function togglecss() {
        var e = document.getElementById("editor");
        if (e.href.match("editor-light.css")) {
            e.href = "editor-dark.css";
        } else {
            e.href = "editor-light.css";
        }
    };

    // automatic loop random background

    window.setTimeout(loopbg, 10000);

    function loopbg() {
        document.body.style.backgroundColor = rancomhexcolor1();
        document.getElementById("backgroundvalue").innerHTML = rancomhexcolor1();
        window.setTimeout(loopbg, 10000);
    }

    // button 2 : random background color

    function randombackground() {
        document.body.style.backgroundColor = rancomhexcolor1();
        document.getElementById("backgroundvalue").innerHTML = rancomhexcolor1();
    }

    function randomgradientbackground() {
        document.body.style.background = "linear-gradient(" + rancomhexcolor1() + ", " + rancomhexcolor2() + ")";
    }

    // http://www.paulirish.com/2009/random-hex-color-code-snippets/

    function rancomhexcolor1() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    function rancomhexcolor2() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    // button 3 : make an alert box

    function alertlink() {
        alert("hi, I am an alert box!");
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