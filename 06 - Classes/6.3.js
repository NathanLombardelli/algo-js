// In the code below, there is a prewritten class named: Animal.
//     From this class, create the two classes, Cat and Dog. They will each have two properties, name and greeting (the second property must be static).
//
// class Animal {
//     sayHello() {
//         return `${this.constructor.greeting}! I'm ${this.name}!`;
//     }
// }
// Test the class: Create an instance of the Dog class and an instance of the Cat class and display the return value of the sayHello method inside the console.

class Animal {

    constructor(name,greeting) {
        this.name = name;
        this.greeting = greeting;
    }
    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
    }
}

class Cat extends Animal{

    constructor(name) {
        super(name,"Miaou");
    }
}

class Dogs extends Animal{

    constructor(name) {
        super(name,"Woof");
    }


}

console.log(new Cat("Mia").sayHello());
console.log(new Dogs("Jilou").sayHello());