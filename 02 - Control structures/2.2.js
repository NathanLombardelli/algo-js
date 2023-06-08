// Ask the user to enter three numbers: minAge, maxAge and currentAge. Display if current is between min and max.
//
//Bonus: if minAge is greater than maxAge, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)
//
// Bonus 2: be polite in the error messages. (facultative)

const readlineSync = require("readline-sync");
let minAge = Number(readlineSync.question('Can you give me minAge ? '));
let maxAge = Number(readlineSync.question('Can you give me maxAge ? '));
let currentAge = 0;

if(minAge > maxAge){

    console.log("I don't think that you understand what the code do ! ");

}else{

    currentAge = readlineSync.question('Can you give me currentAge ? ');
    if (currentAge >= minAge && currentAge <= maxAge){
        console.log("current is between min and max.");
    }else{
        console.log("current is not between min and max !");
    }
}





