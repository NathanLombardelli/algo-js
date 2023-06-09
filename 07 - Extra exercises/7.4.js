// Make an interactive program to manager your favorite pizza flavors. When launched it must display a menu of this style:
//
//     Hello! Welcome to the Pizza Flavors Manager.
//
//     Please choose your actions:
//
//     1 - List all the pizza flavors
//     2 - Add a new pizza flavor
//     3 - Remove a pizza flavor
//     4 - Exit this program
//
// Enter your action's number:

// When the user enter the number of an action he will trigger the appropriate action:
//
//     List all the pizza flavors: Display the current list of pizza flavors. (There should be none if we just launched the program.)
// Add a new pizza flavor: Ask the user for a new pizza flavor to add to the list.
//     Remove a pizza flavor: Ask the user for the number of the pizza flavor in the list he wants to remove.
//     Each time one of the action has been performed it should return to the menu. (Except of course if we select to exit the program.)
//
// Bonus: Save the list of pizza flavors on the file system and reload it each time we launch the application.
const readlineSync = require("readline-sync");


let result = -1;
let flavors = [];

console.log("Hello! Welcome to the Pizza Flavors Manager.");



while(result !== 4){

    console.log("Please choose your actions:");
    console.log("");
    console.log("1 - List all the pizza flavors");
    console.log("2 - Add a new pizza flavor");
    console.log("3 - Remove a pizza flavor");
    console.log("4 - Exit this program");

    result = Number(readlineSync.question('Enter your action\'s number: '));

    switch (result){
        case 1:
            ListPizzaFlavor();
            break;
        case 2:
            AddFlavor();
            break;
        case 3:
            RemoveFlavor();
            break;
    }

}

function ListPizzaFlavor() {
    console.log(" ");
    for (let i = 0; i< flavors.length;i++){
        console.log((i+1) + " : " + flavors[i]);
    }
    console.log(" ");
}

function AddFlavor() {

     flavors.push(readlineSync.question('Enter the flavor to add : '));

}

function RemoveFlavor() {

    ListPizzaFlavor();

    let response = -1;

    while(response <= 0 || response > flavors.length){

       response = Number(readlineSync.question('witch flavor would you like to delete ? : '));

    }


    remove(response);

}

function remove(response) {

    let tab = [];

    for (let i = 0; i < flavors.length;i++){

        if((i+1) !== response) {
            tab.push(flavors[i]);
        }
    }

    flavors = tab;

}


