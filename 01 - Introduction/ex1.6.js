// Ask two integers to the user. Display the rest of the integer division of the two numbers.

const readlineSync = require("readline-sync");
let number1 =  Number(readlineSync.question('Can you give me a number please?'));
let number2  =  Number(readlineSync.question('Can you give me an other please?'));

console.log(number1 % number2);