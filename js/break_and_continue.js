(function () {
"use strict";

/* Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered. */


    var pickNumber = parseInt(prompt("Pick an odd number between 1 and 50"));
    while (true) {
        if (isNaN(pickNumber)) {
            alert("That's not a number, please retry.");
        } else if (pickNumber < 1 || pickNumber > 50 || pickNumber % 2 === 0) {
            alert("Invalid number");
        } else {
            break;
        }

        var pickNumber = parseInt(prompt("Pick an odd number between 1 and 50"));
        }
        console.log("Number to skip is: " + pickNumber)
        for (var i = 0; i < 50; i++){

        if(i === pickNumber){
            console.log("Yikes! Skipping number: " + pickNumber)
            continue;
        } console.log(i)
    }

    // We can get an iteration to skip using continue;
// for (var i = 1; i < 100; i++) {
//
// 	if (i % 2 !== 0) {
// 		// skipping all odd numbers;
//         continue;
// 	}
//
// 	console.log('Here is a lovely even number: ' + i);
// }


})();