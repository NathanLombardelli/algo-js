// Count from 1 to 100. For every even number display the result of their division by 2. For every odd number display the result of their multiplication by 3.
let i= 1;
while (i <= 100){


    if(i % 2 === 0){
        console.log(i/2);
    }else {
        console.log(i*3);
    }

    i++;
}
