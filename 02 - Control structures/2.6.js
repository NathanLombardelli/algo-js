// Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond.
// (1 => Monday, 2 => Tuesday, etc...)

const readlineSync = require("readline-sync");

let number = 0;

while(number < 1 || number > 7){

    number = Number(readlineSync.question('Enter a number between 1 and 7 : '));

    switch (number){
        case 1:
            console.log("Lundi");
            break;
        case 2:
            console.log("Mardi");
            break;
        case 3:
            console.log("Mercredi");
            break;
        case 4:
            console.log("Jeudi");
            break;
        case 5:
            console.log("Vendredi");
            break;
        case 6:
            console.log("Samedi");
            break;
        case 7:
            console.log("Dimanche");
            break;

    }

}


