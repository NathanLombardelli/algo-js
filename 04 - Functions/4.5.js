// Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.
//
//     Examples results:
//
// Point A = [1, 1], point B = [2, 2] => 1.41
// Point A = [1, 1], point B = [3, 1] => 2
// Point A = [4, 1], point B = [1, 1] => 3
// Point A = [-2, 2], point B = [2, -2] => 5.65
// Create a program to use that function.
//
// Write a documentation for the calcDistance function.
//
// Note: You probably need to make some search on Google to learn the mathematical formula to do that. You will also probably need to search for useful functions in JavaScript to help you
// making complex mathematical formulas...

// d = sqrt((x2 - x1)^2 + (y2 - y1)^2).

let A = [1, 1];
let B = [2, 2];

let C = [1, 1];
let D = [3, 1];

let E = [4, 1];
let F = [1, 1];

let G = [-2, 2];
let H = [2, -2];

console.log(calcDistance(A,B));
console.log(calcDistance(C,D));
console.log(calcDistance(E,F));
console.log(calcDistance(G,H));

function calcDistance(a,b)
{

   return Math.sqrt(Math.pow(a[0] - b[0],2) + Math.pow(a[1] - b[1],2)).toFixed(2);

}