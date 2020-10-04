(function () {
"use strict";

/* Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered. */


    var pickNumber = prompt("Pick an odd number between 1 and 50");
    while (true) {
        if (isNaN(pickNumber)) {
            alert("That's not a number, please retry.");
        } else if (pickNumber < 1 || pickNumber > 50 || pickNumber % 2 === 0) {
            alert("Invalid number");
        } else {
            break;
        }
        var pickNumber = prompt("Please pick another number.");
    }   while (true){

    }


})();