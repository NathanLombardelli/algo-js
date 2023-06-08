// Write a program that will display the minimum and maximum elements of a given array.

const readlineSync = require("readline-sync");
let n  = Number(readlineSync.question('how many number in the tab ? '));
let tab = [];

for (let i = 1 ; i <= n ; i++){
    tab.push(Number(readlineSync.question( i +" : ")));
}


let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
for (let val of tab){
    if( val < min){
        min = val;
    }
    if(val > max){
        max= val
    }
}

console.log("Minimum : " + min);
console.log("Maximum : " + max);