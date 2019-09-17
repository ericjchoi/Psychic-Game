/* HW3 Psychic Game */
/* set up global variables and arrays */
var computerLetterSet = ["a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winNum = 0;
var loseNum = 0;
var totalNumGuessAllowed = 10;
var guessLeftNum;
var guessSoFar = [];
var userKey = "";
var i = 0;
var j = 0;
/* functions */
function initialize() {
    guessLeftNum = totalNumGuessAllowed;
    guessSoFar = [];
    userKey = "";
    i = 0;
    j = 0;
}
function initialDisplay() {
    document.getElementById("winNum").innerHTML = winNum;
    document.getElementById("loseNum").innerHTML = loseNum;
    document.getElementById("guessLeftNum").innerHTML = totalNumGuessAllowed;
    document.getElementById("guessSoFar").innerHTML = "";
}
/* game started for the first time */
initialize();
initialDisplay();
/* key pressing events in game */
document.onkeypress = function (event) {
    /* user presses a key */
    var userKey = event.key.toLowerCase();
    guessSoFar[i] = userKey;
    /* computer decides a random alphabet letter */
    var computerRandNum = Math.floor(Math.random() * computerLetterSet.length);
    var x = computerLetterSet[computerRandNum];
    /* user won the game */
    if (x === guessSoFar[i]) {
        document.getElementById("winNum").innerHTML = ++winNum;
        initialize();
        initialDisplay();
        document.getElementById("guessLeftNum").innerHTML = guessLeftNum;
    }
    /* user keeps playing before win or lose decided */
    else {
        document.getElementById("guessLeftNum").innerHTML = --guessLeftNum;
        var y = guessSoFar.toString();
        document.getElementById("guessSoFar").innerHTML = y;
        i++;
    }
    /* user lost the game */
    if (i === totalNumGuessAllowed) {
        document.getElementById("loseNum").innerHTML = ++loseNum;
        initialize();
        initialDisplay();
    }
}