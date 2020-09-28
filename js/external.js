"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userInput = prompt('What is your favorite color?');

console.log('The user enetered: ' + userInput);

alert('Great, ' + userInput + ' is my favorite color too!');

alert("How many days did you rent the following movies?");

var theLittleMermaid = prompt('The Little Mermaid');

var brotherBear = prompt ('Brother Bear');

var hercules = prompt ('Hercules');

var rentalPrice = prompt("How much was rental per day?");

var total = (theLittleMermaid * rentalPrice) + (brotherBear * rentalPrice) + ( hercules * rentalPrice);

alert('Your spent ' + total + ' dollars on movie rentals.');

// END OF EXC 1
// BEGIN EXC 2

var google = prompt('We heard you get paid well! What is your hourly rate at Google?');
var googleHours = prompt ( 'Very nice! How many hours did you work this week?' );

var amazon = prompt('What is your pay at Amazon?');
var amazonHours = prompt( ' Same hours as Google? If not, how many?');

var facebook = prompt('... and how much does Facebook pay?')
var facebookHours = prompt ('How many hours at Facebook this week?')

var weeklyPay = (google * googleHours) + (amazon * amazonHours) + (facebook * facebookHours)

alert ('You made ' + weeklyPay + ' this week!' ) //How do we get double input variables in JS? If I want to prompt once get hourly wages x,y, and z.

//END OF EXC 2
//BEGN EXC 3

var seats = prompt('How many seats are left in the class?');

if (seats>=1) {
    var fit = prompt ('Lucky you. The class has space! Does it fit your schedule? 1 for yes and 2 for no');

        if (fit=1) {
            alert('Excellent. You are registered!')
        } else {
            alert ('Scheduling conflict. Registration unavailable');
        }

} else {
    alert ( 'Class is full. Try again next semester');
}

//Good to enroll