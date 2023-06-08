// Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.
//
//You will have to perform a search on Google to know how to only keep the integer part of a number.

const readlineSync = require("readline-sync");
let number1 =  Number(readlineSync.question('Can you give me a number with decimal please?'));
let number2  =  Number(readlineSync.question('Can you give me an other please?'));

console.log(Math.floor(number1) * Math.floor(number2));