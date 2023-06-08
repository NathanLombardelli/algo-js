// Write a program that will calculate the average value of a given array.
//
//     Test it with the following arrays:
//
//     [1, 2, 3, 4, 5] => 3
//     [100, 101, 102] => 101

let tab1 = [1, 2, 3, 4, 5];
let tab2 = [100, 101, 102];
let av = 0;
let nbrNumbers = 0;

for (let value of tab1){
    av+= value;
    nbrNumbers++;
}
console.log(av/nbrNumbers); // 3

nbrNumbers = 0;
av = 0;

for (let value of tab2){
    av+= value;
    nbrNumbers++;
}
console.log(av/nbrNumbers); //101
