// Make a program that asks for an integer n and generates the n first Fibonacci numbers.
//
//     Yes, you'll have to search what the hell are Fibonacci numbers.
const readlineSync = require("readline-sync");


let number = Number(readlineSync.question('Enter a number : '));

if(number <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < number; i++) {
        console.log(fibonacci(i));
    }
}

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}