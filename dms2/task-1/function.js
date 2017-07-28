    // button 1 : toggle css file

    function togglecss() {
        var e = document.getElementById("editor");
        if (e.href.match("editor-light.css")) {
            e.href = "editor-dark.css";
        } else {
            e.href = "editor-light.css";
        }
    };

    // button 2 : random background color

    function randombackground() {
        document.body.style.backgroundColor = rancomhexcolor1();
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
        document.getElementById("titletext").innerHTML = (parseInt(document.getElementById("titletext").innerHTML) + 1);
        document.getElementById("comment").style.opacity = "1";
    }