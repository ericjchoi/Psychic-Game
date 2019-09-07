/* HW3 Psychic Game */
/* User has 10 times of chance to guess letters */
/* 11th user typing resets the browser */
/* game resumes from 12th typing */

var computerLetterSet = ["a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var winNum = 0;
var loseNum = 0;
var guessLeftNum = 10;
var guessSoFar = [];
var userKey = "";
var i = 0;
var j = 0;

function initialize() {
    winNum = 0;
    loseNum = 0;
    guessLeftNum = 10;
    guessSoFar = [];
    userKey = "";
    i = 0;
    j = 0;
}
function initialDisplay() {
    document.getElementById("winNum").innerHTML = 0;
    document.getElementById("loseNum").innerHTML = 0;
    document.getElementById("guessLeftNum").innerHTML = 10;
    document.getElementById("guessSoFar").innerHTML = "";
}
initialize();
initialDisplay();

document.onkeyup = function (event) {

    var userKey = event.key.toLowerCase();
    guessSoFar[i] = userKey;

    var computerRandNum = Math.floor(Math.random() * 26);
    var x = computerLetterSet[computerRandNum];

    if (x === guessSoFar[i]) {
        document.getElementById("winNum").innerHTML = ++winNum;
    }
    else {
        document.getElementById("loseNum").innerHTML = ++loseNum;
    }

    document.getElementById("guessLeftNum").innerHTML = --guessLeftNum;

    var y = guessSoFar.toString();
    document.getElementById("guessSoFar").innerHTML = y;

    i++;

    /* user has 10 times of chance */
    if (i === 11) {
        location.reload();
    }
}