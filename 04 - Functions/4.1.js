// Create a function named calcSurface that takes the length and width of a rectangle and returns its surface.

// Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle.
// That program must use the function you created.
//
//     Write a documentation for the calcSurface function.

const readlineSync = require("readline-sync");
let l  = Number(readlineSync.question("What's the length of the rectangle ? "));
let w  = Number(readlineSync.question("What's the width of the rectangle ? "));

console.log("Surface of the rectangle : " + calcSurface(l,w));

/**
 * takes the length and width of a rectangle and returns its surface.
 * @param length length of the rectangle
 * @param width width of the rectangle
 * @returns {number} the surface of the rectangle
 */
function calcSurface(length,width){
    return length*width;
}