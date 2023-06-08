// Write a program that will create a duplicate of a given array.
//
//     Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy.
//     (You'll have to search on the MDN or Google for this one.)
//

const readlineSync = require("readline-sync");
let n  = Number(readlineSync.question('how many number in the tab ? '));
let tab = [];

for (let i = 1 ; i <= n ; i++){
    tab.push(Number(readlineSync.question( i +" : ")));
}

console.log("=== Copy push ===");

let copy = [];

for (let val of tab){
    copy.push(val);
}

for (let val of copy){
    console.log(val);
}

console.log("=== Copy by reference  ===");

let copyRef = [];

copyRef = [...tab];

for (let val of copyRef){
    console.log(val);
}

console.log("=== Copy with map  ===");

let copyMap = [];

identity = (x) => x;
copyMap = tab.map(identity);

for (let val of copyMap){
    console.log(val);
}

console.log("=== Copy with filter  ===");

let copyFilter = [];

copyFilter = tab.filter(() => true);

for (let val of copyFilter){
    console.log(val);
}

console.log("=== Copy with slice  ===");


let copySlice = [];

copySlice = tab.slice();

for (let val of copySlice){
    console.log(val);
}

console.log("=== Copy with concat  ===");

let copyConcat = [];

copyConcat = tab.concat();

for (let val of copyConcat){
    console.log(val);
}

console.log("=== Copy with from  ===");

let copyFrom = [];

copyFrom = Array.from(tab);

for (let val of copyFrom){
    console.log(val);
}