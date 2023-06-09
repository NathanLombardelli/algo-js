// Create a program that can sort an array without using Array.sort() or a similar method. Test it with multiple arrays of numbers.

tab = [5,4,3,2,1];
tab2 = [54,12,2,865,7];
tab3 = [6,7,8,9,10];

console.log(tab);
console.log(sort(tab));
console.log("");
console.log(tab2);
console.log(sort(tab2));
console.log("");
console.log(tab3);
console.log(sort(tab3));

function sort(tab){

    for (let i = 0; i < tab.length -1; i++) {
        for (let j = 0; j < tab.length -i -1; j++) {
            if (tab[j] > tab[j + 1]) {
                let temp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = temp;
            }
        }
    }

    return tab;

}