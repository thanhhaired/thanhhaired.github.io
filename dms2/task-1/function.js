    // button 1 : toggle css file

    function togglecss() {
        var el = document.getElementById("editor");
        if (el.href.match("editor-light.css")) {
            el.href = "editor-dark.css";
        } else {
            el.href = "editor-light.css";
        }
    };

    // button 2 : random background color

    function randombackground() {
        document.body.style.backgroundColor = randomColors();
    }

    // http://www.paulirish.com/2009/random-hex-color-code-snippets/

    function randomColors() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    // button 3 : make an alert box

    function alertlink() {
        alert("hi, I am an alert box!");
    }