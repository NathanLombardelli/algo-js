// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a
// list of the same cast but in a random order.
//
//     Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of
//     the previous cast that will form the new cast of your next serie.


const readlineSync = require("readline-sync");

let serie = askTvSerie();

console.log("");
console.log("Durstenfeld shuffle algorithm ");
console.log(randomizeCast(serie));
console.log("");
console.log(" Fisher–Yates shuffle ");
console.log(randomizeCast2(serie));

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

/* Durstenfeld shuffle algorithm */
function randomizeCast(tvSerie){

    let cast = Array.from(tvSerie.Cast);

    for (let i = cast.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cast[i];
        cast[i] = cast[j];
        cast[j] = temp;
    }



    return cast;

}

/* Fisher–Yates shuffle */
function randomizeCast2(tvSerie) {

    let cast = Array.from(tvSerie.Cast);

    /* Fisher–Yates shuffle */
    let currentIndex = cast.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [cast[currentIndex], cast[randomIndex]] = [
            cast[randomIndex], cast[currentIndex]];
    }

    return cast;
}