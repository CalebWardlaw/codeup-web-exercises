(function () {
"use strict";

/* Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered. */



var numberToSkip = parseInt(prompt("Choose an odd  number between 1 and 50."))
var numberConditionMet = numberToSkip <= 50 && numberToSkip % 2 !== 0 && numberToSkip >= 1
var i = 0;
do {
    numberToSkip;
    i++
} while (numberConditionMet===false);



})();