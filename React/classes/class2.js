// Common ES6 Concepts for React

// Classes 
// A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.
// It is a blueprint or model for creating objects(instances). It defines the attributes(properties) and functions(methods) that characterize the objects of the class.
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHi (){
        console.log(`Hi, I am ${this.name}`)
    }
    sayAge (){
        console.log(`My age is ${this.age}`)
    }
}
let person1 = new Person('George', 30);
let person2 = new Person('John', 25)
let person3 = new Person('Johnny', 26)

person1.sayAge();
person2.sayHi();

// Inheritanace
// Inheritance allows one class to inherit properties and methods from another class. The class that is inherited from is called the superclass and the class that inherits is called the subclass.

class Doctor extends Person{
    constructor(name, age, hospital, salary, AOS){
        super(name, age);
        this.hospital = hospital;
        this.salary = salary;
        this.aos = AOS;
    }
    docInfo(){
        console.log(`Hi there, my name is ${this.name}, I work at ${this.hospital}, I earn ${this.salary} and I specialize in ${this.aos}.`)
    }
}

let mary = new Doctor("Mary", 27, "UPTH", '$200000', "Gynaecology");
let allen = new Doctor("Allen", 37, "UPTH", '$100000', "Family Medcine");

mary.sayAge();
allen.docInfo();

// The Map 
let fruits = ['apple', 'Orange', 'Mango']
const newFruit = fruits.map((fruit) => `I love ${fruit}`);
console.table(newFruit);
console.table(fruits);
fruits.forEach((fruit) => console.log(`I love ${fruit}`) )
console.table(fruits);

// Destructuring
// This is a way to extract only the items that is needed from an array or object.

const cars = ["Tesla", "Benz", "BMW", "Audi", "Lexus", "Toyota Corrola"];
// const electric = cars[0];
// const gas  = [cars[1], cars[2]];
// const bolt = cars[-1]

const [electric, gas, gas1, gas2, gas3, bolt] = cars;
console.log(electric)
console.log([gas, gas1, gas2, gas3])
console.log(bolt)

const [expensive, aesthetic, ...average] = cars;
console.log(average)
// ... Is called the rest operator
// Example
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [mainadd, mainsubtract, mainmultiply, maindivide] = calculate(4, 7);
  console.log(mainmultiply)

//   Object Destructuring
const moto = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2002, 
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}
// Old way
function motoInfo(moto){
    console.log(`My moto name is ${moto.brand} - ${moto.model}, it is a hard ${moto.type}, it is ${moto.color} in color and it was made in the year ${moto.year}.`);
};
motoInfo(moto);
// But using Destructuring
carInfo(moto)
function carInfo({ model, type, color, brand, registration: {state} }){
    console.log(`My Car name is ${brand} - ${model}, it is a hard ${type}, it is ${color} in color and it was registered in ${state}.`);
};