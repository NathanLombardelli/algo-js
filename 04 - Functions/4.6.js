// Create a function factorial(a) that returns the factorial of a number.
//
//     That function must be recursive.


console.log(factorial(5));

function factorial(a){

    if(a >= 1 ) {
        return a * factorial(a-1);
    }else{
        return 1;
    }
}