// Write a program that will add all the elements of an array.
//
//     Test it with the following arrays:
//
//     [1, 2, 3, 4, 5] => 15
//     [100, 101, 102] => 303

let tab1 = [1, 2, 3, 4, 5];
let tab2 = [100, 101, 102];
let sum = 0;

     for (let value of tab1){
         sum+= value;
     }
    console.log(sum); // 15

     sum = 0;

    for (let value of tab2){
        sum+= value;
    }
    console.log(sum); //303
