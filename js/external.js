"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userInput = prompt('What is your favorite color?');

console.log('The user entered: ' + userInput);

alert('Great, ' + userInput + ' is my favorite color too!');

//BEGIN PROBLEM 1

alert("How many days did you rent the following movies?");

var theLittleMermaid = Number(prompt('The Little Mermaid'));

var brotherBear = Number(prompt('Brother Bear'));

var hercules = Number(prompt('Hercules'));

var rentalPrice = Number(prompt("How much was rental per day?"));

var total = (theLittleMermaid * rentalPrice) + (brotherBear * rentalPrice) + ( hercules * rentalPrice);

alert('You spent ' + total + ' dollars on movie rentals.');

// END OF PROBLEM 1
// BEGIN PROBLEM 2

var google = Number(prompt('We heard you get paid well! What is your hourly rate at Google?'));
var googleHours = Number(prompt ( 'Very nice! How many hours did you work this week?' ));

var amazon = Number(prompt('What is your pay at Amazon?'));
var amazonHours = Number(prompt( ' Same hours as Google? If not, how many?'));

var facebook = Number(prompt('... and how much does Facebook pay?'));
var facebookHours = Number(prompt ('How many hours were worked at Facebook this week?'));

var weeklyPay = (google * googleHours) + (amazon * amazonHours) + (facebook * facebookHours);

alert ('You made ' + weeklyPay + ' this week!' ); //How do we get double input variables in JS? If I want to prompt once get hourly wages x,y, and z.

// END OF PROBLEM 2
// BEGIN PROBLEM 3

alert ("Lets register you for class. Click okay if the statement is true or cancel if false. ");

var space = confirm('Is there space in the class?');

if (space===false) {

    alert("Unable to register.");
}

if (space===true) {

    var schedule = confirm('Is the time slot free?');

        if (schedule===true) {

            alert("You are registered.");
    }
}

// END OF PROBLEM 3
// BEGIN PROBLEM 4


alert('You may be eligible for a discount!');

var itemsPurchased = Number(prompt("How many items did you purchase?"));

if(itemsPurchased>=2) {

    var expireDate = confirm ("Is your offer current? Okay for yes, cancel for no.")

        if (expireDate===true) {

            alert("Congratulations! We will apply the discount!");

        } else { alert (" A discount cannot be applied at this time.") }

} else { alert(" A discount cannot be applied at this time."); }

//END OF PROBLEM 4
