// Make a program that asks for a positive integer. Then display all the divisors of that integer which are not 1 or itself.
//
//     Examples:
//
// 7 => nothing (it's a prime number)
// 10 => 2 5
// 9187 => nothing (it's a prime number too)
// 134234 => 2 41 82 1637 3274 67117

const readlineSync = require("readline-sync");

let number = -1;

while(number <= 0) {
    number = Number(readlineSync.question('Enter a positive number : '));
}

for (let i = 2 ; i < 99999999 ; i++ ){ // Number.MAX_VALUE ??
    if(number % i === 0 && number !== i ){
        console.log(number/i);
    }
}

