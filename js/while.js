(function () {
"use strict";

/* While loop using console.log*/


// var i = 1
// while(i<16){
//     for( var i = 1; i <= 16; i++){
//         console.log(Math.pow(2,i))
//     }
// }

//Why does this run despite the duplicate declaration notification? Can it be refactored to avoid it?




var totalCones = Math.floor(Math.random() * 50) + 50;

alert("Cone total is " + totalCones)

do {
    var sold = Math.floor(Math.random() * 5) + 1;
    var remaining = (totalCones - sold)

    function nextRound (sold){
        return (totalCones - sold);
    }

    console.log(sold + " cones sold ...")
    console.log(nextRound(sold) + " remain")


    // need to establish how many cones are remaining

} while(sold < 4)

    //function takes in something and outputs something else












})();















