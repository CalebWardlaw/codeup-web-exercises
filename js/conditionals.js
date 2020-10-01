"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(input){
    if (input === "blue"){
        return "blue is the color of the sky";
    } if(input === "red"){
        return "Strawberrries are red";
    } if(input === "cyan"){
        return "I don't know anything about cyan";
    } else {
        return "A girl has no color.";
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var inputSwitch = prompt("Name a color");
//
// switch(inputSwitch) {
//     case "blue":
//         alert("blue is the color of the sky");
//         break;
//     case "red":
//         alert("strawberries are red");
//         break;
//     case "cyan":
//         alert("A girl has no color");
//         break;
//     default:
//         alert("A girl has no" + inputSwitch + "color");
//         break;
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var pass = prompt("Name a color");
//
// alert(analyzeColor(pass));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


//structuring function for total after discount

function calculateTotal(luckyNumber, price){
       if (luckyNumber===1) {
           return price - (.10 * price);
       }
       if (luckyNumber===2) {
           return price - (.25 * price);
       }
       if (luckyNumber===3) {
           return price - (.35 * price);
       }
       if (luckyNumber===4) {
           return price - (.50 * price);
       }
       if (luckyNumber===5) {
           return price - (1 * price);
       }
       if (luckyNumber===0) {
           return price;
       }
}



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

// var luckyNumber = Math.floor(Math.random() * 6);
//
// var billTotal = prompt("What was your total bill?");
//
// alert(luckyNumber + " is your lucky number. Your price before discount is " + billTotal + ". Discounted price is " + calculateTotal(luckyNumber, billTotal));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var decision = confirm("Would you like to enter a number?")
        //returns boolean

    if (decision === true) {
        var userInput = prompt("Please enter number");
    }
    //getting number from user

    if (isNaN(userInput)){
        alert("You did not pick a number.");
    }
    //alert for not a number

    if (userInput % 2 === 0) {
        alert(userInput + " is an even number.")
    }    else (alert (userInput + " is an odd number."));
    //determining if odd or even

    if (userInput > 0) {
        alert(userInput + " is a positive number.")}
        else (alert (userInput + " is a negative number."));
    //determining if negative or positive


