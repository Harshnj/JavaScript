//Objects creation
//Object is a entity having state and behaviour
//JS objects by default have a proprty calLed prototype 
//In JavaScript, an object is a composite data type that allows you to store and organize data using a collection of key-value pairs. Each key in the object is a string (or a Symbol), and the associated value can be of any valid JavaScript data type, including other objects. Objects in JavaScript are versatile and are used to represent and model real-world entities by encapsulating their properties and behaviors.
let person = {
    name: 'harsh',
    age: 22,
    gender: 'male',
     GOAT() {
        console.log('Harsh is G.O.A.t');
    }
};
person.location = 'New York'; // Adding a new property
person.age = 31;             // Modifying an existing property
delete person.gender;        // Deleting a property

let car = {
    brand: 'Toyota',
    startEngine: function() {
        console.log('Engine started');
    }
};

car.startEngine(); // Calling the method

let person1 = {
    name: 'John',
    age: 30,
    gender: 'male',
    sayHello: function() {
        console.log('Hello, I am ' + this.name);
    }
};
person1.__proto__ = person; //bY this we can set the prototype of a object to other defined object and the properties of that object can be viewed