// Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again.
// (This program should never end as long as the user didn't chose 42).
//

const readlineSync = require("readline-sync");
let number = Number(readlineSync.question('Can you give me your favorite number ? '));

while(number > 42 || number < 42){
    console.log("Are you sure?");
    number = Number(readlineSync.question('Can you give me your favorite number ? '));
}