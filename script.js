var rs = new Audio("resources/audio/run.mp3");
rs.loop = true;

var js = new Audio("resources/audio/jump.mp3");

var ds = new Audio("resources/audio/dead.mp3");

var idls = new Audio("resources/audio/Idle.mp3");
idls.loop = true;

var ws = new Audio("resources/audio/win.mp3");

var rw = 0;
var jw = 0;
var bw = 0;
var sw = 0;
var cw = 0;
var dw = 0;
var xw = 0;

var v = 70;


function key(event) {

    if (event.which == 13) {

        if (rw == 0) {

            clearInterval(xw);
            idls.pause();
            
            fid = f();

            fw = setInterval(move, v);

            rw = setInterval(run, v);
            rs.play();

            bw = setInterval(back, v);

            sw = setInterval(score, v);

            cw = setInterval(coin, v);

            

            start.style.visibility = "hidden";

            

        }

    }

    if (event.which == 32) {

        if (jw == 0) {
            clearInterval(xw);
            clearInterval(rw);
            rs.pause();
            rw = -1;
            jw = setInterval(jump, 280);
            js.play();

            start.style.visibility = "hidden";


        }
    }
}

var fid = 0;
var fw = 0;

var p = 1400;

function f() {

    for (var y = 0; y < 10; y++) {

        var i = document.createElement("img");

        i.src = "resources/flame2.gif";

        i.className = "f";

        i.style.marginLeft = p + "px";

        if (y <= 5) {
            p = p + 1200;
        }
        if (y >= 6) {
            p = p + 950;
        }

        i.id = "f" + y;

        document.getElementById("div1").appendChild(i);

    }
}


function move() {
    for (var y = 0; y < 10; y++) {
        var z = getComputedStyle(document.getElementById("f" + y));

        var w = parseInt(z.marginLeft);
        w = w - 20;

        document.getElementById("f" + y).style.marginLeft = w + "px";

        // alert(w); // 420-0
        if (w <= 440 & w >= 0) {

            //   alert(mt); //300

            if (mt > 300) {

                // alert("dead");

                clearInterval(rw);
                rs.pause();
                clearInterval(jw);
                jw = -1;
                clearInterval(bw);
                clearInterval(sw);
                clearInterval(cw);
                clearInterval(fw);
                clearInterval(xw);
                idls.pause();

                dw = setInterval(dead, 100);
                ds.play();

            }

        }
    }
}



var img = document.getElementById("boy");

var r = 1;

function run() {

    r = r + 1;

    if (r == 11) {

        r = 1;
    }

    img.src = "resources/sprites/run/Run (" + r + ").png";
}

var mt = 420;
var j = 1;

function jump() {

    if (j <= 5) {
        mt = mt - 65;
    }
    if (j >= 6) {
        mt = mt + 65;
    }

    img.style.marginTop = mt + "px";

    j = j + 1;

    if (j == 11) {

        j = 1;
        clearInterval(jw);
        clearInterval(xw);
        idls.pause();
        rw = 0;
        rw = setInterval(run, v);
        rs.play();
        jw = 0;

        if (fid == 0) {
            fid = f();
        }

        if (fw == 0) {
            fw = setInterval(move, v);
        }
        if (bw == 0) {
            bw = setInterval(back, v);
        }
        if (sw == 0) {
            sw = setInterval(score, v);
        }
        if (cw == 0) {
            cw = setInterval(coin, v);
        }
    }

    img.src = "resources/sprites/jump/Jump (" + j + ").png";
}

var x = 1;

function idle() {
    x = x + 1;
    if (x == 11) {
        x = 1;
    }
    img.src = "resources/sprites/idle/Idle (" + x + ").png";
}


var ba = 0;

function back() {

    ba = ba - 20;

    document.getElementById("div1").style.backgroundPositionX = ba + "px";
}


var u = 0;

function score() {

    u = u + 5;

    if (u == 1000) {
        ws.play();
        clearInterval(rw);
        rs.pause();
        clearInterval(jw);
        jw = -1;
        clearInterval(bw);
        clearInterval(sw);
        clearInterval(cw);
        clearInterval(fw);
        clearInterval(xw);
        idls.pause();

        document.getElementById("win").style.visibility = "visible";
        

    }

    document.getElementById("score").innerHTML = u;
}

var c = 1;

function coin() {
    c = c + 1;

    if (c == 7) {
        c = 1;
    }

    document.getElementById("coin").src = "resources/coin/Coin (" + c + ").png";
}

var d = 1;

function dead() {
    d = d + 1;

    if (d == 11) {
        d = 10;
        img.style.marginTop = "420px";
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = u;
    }
    img.src = "resources/sprites/dead/Dead (" + d + ").png";
}



var start = document.getElementById("start");

function str(event) {

    xw = setInterval(idle, 200);
    idls.play();
    start.style.visibility = "hidden";
  
}

function re() {

    ds.pause();
    location.reload();
}