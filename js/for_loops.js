(function (){
"use strict";



/*Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10*/
    var i = 1

    function showMultiplicationTable(number) {
        for(var i =1; i <= 10; i++){
            var product = num * i;
            console.log(num + "x" + i + i + " = " + product);
        }
    }

    showMultiplicationTable(9)


    // console.log(showMultiplicationTable(9))
    // expecting 9, 18 , 27 ... 90

    //When I don't console log in the code, function is not callable in console. Why?


/*Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. */

    // function getRandomInt(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    //
    // for(var i = 0; i < 10; i++){
    //     var randomNumber = getRandomInt(20, 200)
    //     if (randomNumber % 2 === 0){
    //         console.log(randomNumber + " is even")
    //     } else {
    //         console.log(randomNumber + " is odd")
    //     }
    // }
    //
    //


/*Create a for loop that uses console.log to create the output shown below. NUMBER PYRAMID*/
    //My solution (below)
    // var arr = ["1", "22", "333", "4444", "55555", "666666", "7777777", "88888888", "999999999"]
    // for (var i = 0; i < arr.length; i++) {
    //     console.log(arr[i])
    // }

    //Nested loop option per instructor (below)

    for(var i = 1; i <= 9 ; i++){
        var output = '';
        //empty string for concat. later
            for (var j = 1 ; j <= i++ ;){
                i += i;
            }
        console.log(output);
    }

    //why doesn't this (below) work as well?
    //because "i" is getting incremented and not the body?

    // var arr = ["1", "22", "333", "4444", "55555", "666666", "7777777", "88888888", "999999999"]
    // for (let i = 0; i < 9; i++){
    //     console.log(arr[0])
    // }




/*Create a for loop that uses console.log to create the output shown below. Countdown from 100 by 5 to 5*/

// for(var i = 100; i > 0 ; i++){
//     console.log(i);
//     i-=6
//     //why does this need to be six?
// }
//
//
//















})();