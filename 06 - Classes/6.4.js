// Create a class named Person. It will have two properties, firstname and lastname, as well as a getter name, which will return "[firstname] [lastname]",
// and a setter name, which will divide the full name on the basis of a space: the first element will be the firstname, the second the lastname.
//
//     Test the class: Create an instance of the Person class and display the value of the name inside the console,
//     then assigns a new value to it and displays the state of the instance inside the console at the end of the process.

class Person{

    constructor(firstname,lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getName(){
        return this.firstname + " " + this.lastname;
    }

    setName(name){
        let names = name.split(' ');
        this.firstname = names[0];
        this.lastname = names[1];
    }

}
let Nathan = new Person("Nathan","Lombardelli");
console.log(Nathan.getName());
Nathan.setName("Harry Potter");
console.log(Nathan.getName());