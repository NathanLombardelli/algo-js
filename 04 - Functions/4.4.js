// Create a function named average(arr) that takes an array of numbers as argument and returns the average.
//
//     Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.
//
//     Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.
//
//     Create a program that asks a number to the user then generate that same amount of random numbers but also displays their average, min and max.
//     To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.
//
// Write a documentation for all the functions you created.

const readlineSync = require("readline-sync");
let nbr  = Number(readlineSync.question("Choose a number :  "));

let array = multiRand(nbr);
console.log(array);
console.log("min : " + min(array));
console.log("max : " + max(array));
console.log("average : " + average(array));


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

/**
 * Return the average of an array of numbers.
 * @param arr an array of numbers.
 * @returns {number} the average of an array of numbers.
 */
function average(arr){
    let av = 0;
    for (let val of arr){
        av += val;
    }
    return av/arr.length;
}

/**
 * Return the minimum of an array of numbers.
 * @param arr an array of number.
 * @returns {number} the minimum of an array of numbers.
 */
function min(arr){

    let min = Number.MAX_VALUE;

    for (let val of arr){
        if( val < min){
            min = val;
        }
    }

    return min;
}

/**
 * Return the maximum of an array of numbers.
 * @param arr an array of number.
 * @returns {number} e maximum of an array of numbers.
 */
function max(arr){

    let max = Number.MIN_VALUE;

    for (let val of arr){
        if(val > max){
            max= val
        }
    }

    return max;
}