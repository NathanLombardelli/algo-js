
// By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10.
// You should not modify anything in rand10() to achieve this.
//
//     Write a documentation for the multiRand(n) function.
//
// Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.

const readlineSync = require("readline-sync");
let nbr  = Number(readlineSync.question("how many number in the array ? "));
console.log(multiRand(nbr));


/**
 * returns an array of n numbers between 1 and 10.
 * @param n number of number between 1 and 10 in the array.
 * @returns {*[]} a array of n number between 1 and 10.
 */
function multiRand(n){
    let array = [];
    for (let i = 0 ; i < n ; i++){
        array.push(rand10());
    }
    return array;
}

/**
 * Return a number between 1 and 10.
 * @returns {number} a number between 1 and 10.
 */
function rand10(){
    return Math.floor(Math.random() * 10);
}