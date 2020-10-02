(function (){
"use strict";



/*Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10*/
    // var i = 1
    //
    // function showMultiplicationTable(number) {
    //     while (i <= 10) {
    //         console.log(i * number)
    //         i++;
    //
    //     }
    //
    // }

    // console.log(showMultiplicationTable(9))
    // expecting 9, 18 , 27 ... 90


/*Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:*/

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Function for obtaining random integer in range

    var randomNumber = getRandomInt(20, 200)

    //Setting global var for "for loop"

    for (var i = 20; i <= 200; i++){
        if ( i % 2 === 0){
            console.log(i + " is even")
        } else {
            console.log(i + " is odd")
        }

    }



/*Create a for loop that uses console.log to create the output shown below. NUMBER PYRAMID*/






/*Create a for loop that uses console.log to create the output shown below. Countdown from 100 by 5 to 5*/




















})();