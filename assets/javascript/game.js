/* HW3 Psychic Game */

/* HOW to update code into other branch
   update your code in vscode
   in terminal ....
   git branch
   git checkout -b version2
   git add .
   git commit -m "version2 update"
   git push origin version2
*/

/* User has 10 times of chance to guess letters */
/* 11th user typing resets the browser */
/* game resumes from 12th typing */

// var computerLetterSet = ["a", "b", "c", "d", "e", "f",
//     "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
//     "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerLetterSet = ["a", "b", "c", "d"]; /* testing array */

var winNum = 0;
var loseNum = 0;
var totalNumGuessAllowed = 10;
var guessLeftNum;
var guessSoFar = [];
var userKey = "";
var i = 0;
var j = 0;

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

initialize();
initialDisplay();

document.onkeypress = function (event) {

    var userKey = event.key.toLowerCase();
    guessSoFar[i] = userKey;

    var computerRandNum = Math.floor(Math.random() * computerLetterSet.length);
    var x = computerLetterSet[computerRandNum];

    if (x === guessSoFar[i]) {
        document.getElementById("winNum").innerHTML = ++winNum;
        initialize();
        initialDisplay();
        document.getElementById("guessLeftNum").innerHTML = guessLeftNum;
    }
    else {
        document.getElementById("guessLeftNum").innerHTML = --guessLeftNum;
        var y = guessSoFar.toString();
        document.getElementById("guessSoFar").innerHTML = y;
        i++;
    }

    if (i === totalNumGuessAllowed) {
        document.getElementById("loseNum").innerHTML = ++loseNum;
        initialize();
        initialDisplay();
    }
}