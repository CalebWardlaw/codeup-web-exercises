// //Morning warmup
// let inputString = "Trick or Treat";
// let inputArray = inputString.split('')
//
// //display each string in the array
// inputArray.forEach(function(element, index) {
//     console.log("[" + index +"] " + element);
// })
// // ******** Math Methods ********
//
// //Getting a random number
//
// let randomNum = Math.random() * 2;
//
// console.log(randomNum);
//
// // the above outputs a decimal, we can multiply it up
//
// //Math.round()
// //cant use an integer referring to an array so we round!
// console.log(Math.round(randomNum));
//
// let index = Math.round(randomNum)
// console.log(index);
//
// //once we have that integer, let's choose a random string from our array!
//
// let randomWord = inputArray[index];
// console.log(randomWord);
//
// //math.floor()
//
// //Math.ceil()
// //if we want to round UP, regardless of decimal place, we use Math.ceil()
//
// index = Math.ceil(randomNum);
// ("Rounding up (with ceil): " )
//
//
// let circumference = Math.PI * radius
//
// let area = Math.PI * Math.pow()
//
//

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

console.log(getRandomInt(1, 100))