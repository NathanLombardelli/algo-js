// Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:
//
//     Name
// Production year
// Names of the cast members (there can be as much as the user want)
// That function must gather all the data in a single object and return it. The data structure must be elegant.
//
//     Create a program that use that function to generate a TV serie object and display it to the user in JSON format.


const readlineSync = require("readline-sync");
console.log(askTvSerie());

function askTvSerie(){

    let name  = readlineSync.question('Name : ');
    let year  = Number(readlineSync.question('Production year : '));
    let nbrCast  = Number(readlineSync.question('how many cast members ? '));
    let cast = [];

    for (let i = 1 ; i <= nbrCast ; i++){
        cast.push(readlineSync.question( i +") Name :  "));
    }

    return {
        Name: name,
        Year: year,
        Cast: cast
    };

}