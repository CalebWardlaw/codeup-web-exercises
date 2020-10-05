(function (){
    "use strict";

/* While loop using console.log*/


var i = 1
while(i<16){
    for( var i = 1; i <= 16; i++){
        console.log(Math.pow(2,i))
    }
}

//Why does this run despite the duplicate declaration notification? Can it be refactored to avoid it?

// var totalCones = Math.floor(Math.random() * 50) + 50;
// var totalTransactions = 0
//
//     console.log("We need to sell " + totalCones + " cones.")
//
//     do{
//
//         var transaction = Math.floor(Math.random() * 5) + 1;
//             //reassign value of
//         // console.log(transaction + totalTransactions)
//
//         console.log(transaction + " cones sold.")
//
//         totalTransactions = transaction + totalTransactions
//
//         console.log(totalCones - totalTransactions + " cones remain.")
//         if(totalCones - totalTransactions === 0 || transaction === (totalCones - totalTransactions)){
//             console.log("Last " + (totalCones - totalTransactions) + " sold.")
//             console.log ("Yay! I sold them all!")
//             break;
//         }
//         if (totalCones - totalTransactions <= 0){
//             console.log ("Yay! I sold them all!")
//             break;
//         } else
//
//         if (transaction >= (totalCones - totalTransactions)){
//             console.log("I can't sell you " + transaction + " cones." + " I have " + (totalCones - totalTransactions) + " left.")
//             console.log("But I will sell you " + (totalCones - totalTransactions))
//             console.log("Last " + (totalCones - totalTransactions) + " sold."  )
//             console.log("Yay! I sold them all!")
//             break;
//         }
//     } while(totalTransactions < totalCones)
//





})();


























