class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

// Creating an instance of the class
let john = new Person('John', 30);

// Accessing properties and calling methods
console.log(john.name);  // 'John'
console.log(john.age);   // 30
john.sayHello();         // 'Hello, my name is John and I'm 30 years old.'


//Inheritance
class Animal {
    // let a =100;The use of let inside the class body is not allowed. Class fields must be declared inside the constructor or methods.
    constructor(name) {
        this.name = name;
        this.a=100;//Correct way
    }

    sayHello() {
        console.log(`Hello, I'm ${this.name}.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);// Call the constructor of the parent class
        this.breed = breed;
    }

    bark() {
        super.sayHello();//Used to call super class methods in sub class
        console.log('Woof! Woof!');
    }
}

let myDog = new Dog('Buddy', 'Golden Retriever');
myDog.sayHello();  // 'Hello, I'm Buddy.'
myDog.bark();      // 'Woof! Woof!'


//try and catch
// let a =10;
// let b=a/c;
// console.log(b);

try{
let a =10;
let b=a/c;
console.log(b);
console.log("In Try")
}catch(err){
    console.log(err);
    console.log("IN CAtch")
}

console.log("Hello")
console.log("Hello")
console.log("Hello")