// Objects In Javascript
/*
    Javascript is an object based language, hence objects are the most important data types and they form the building blocks for modern javascript.
    Objects are variables with many values, these values are written as 
    name: value pairs.
    It's common practice to declare objects with the const keyword.
*/
// Types of objects
/*
    1) Built-in Objects: These are objects provided by Javascript, such as Array, Number, Date, Math, String, etc
    2) Custom / User-defined Objects: These are objects created by the programmer to suit their specific needs.
*/

// 1) Creating an object with the object literal notation.
const student = {
    firstName: "Victor",
    gender: "Male",
    Age: 30,
    isMarried: false,
    // A method is a function inside an object.
    greet: function () {
        // this is a keyword used to refer to the current object 
        console.log("Hi there my name is", this.firstName, this.lastName);
    },
}

// Acessing an object
console.log(`The name of our student is ${student.firstName}`);
console.log(`The age of our student is ${student.Age}`);
console.log(`The gender of our student is ${student['gender']}`);
student.greet();

// create a book object : It should have a title, an author, yearPublished, price, genre, ISBN
const book1 = {
    title: "Things Fall apart",
    author: "Chinua Achebe",
    year: 1995,
    price: '$5',
    genre: "Prose",
    ISBN: 12345
};

console.log(`The price of this book is ${book1.price}`);
// Updating an Object
book1.price = '$10';
console.log(`The price of this book is ${book1.price}`);

// Deleting prperties of an object
delete book1.genre;
console.log(book1)

// 2) Creating an instance of the global Object
const car = new Object;
car.name = "ES350"
car.brand = "Lexus";
car.year = 2020;
car.color = "White";
car.license = false;

// 3) The Constructor Function
function bike(name, color, model, year){
    this.name = name;
    this.color = color;
    this.model = model;
    this.year = year;
    // Default values
    this.isNew = true;
    this.engine = "V-8 Fuel Engine";
    this.drive = function(){
        console.log(`I am driving my ${this.name} bike now.`);
    };
    this.spec = ()=>{
        console.log(`Bike name ${this.name}, ${this.color} color, model ${this.model}, was made in ${this.year}`);
    };
};

// Instances of the bike object
let bike1 = new bike("Yamaha", "red", "racing");
let bike2 = new bike("Ducati", "white", "luxry", 2020);
let bike3 = new bike("Ducati", "white", "luxry", 2020, 40);

// create a laptop Object using the constructor function, it should have 4 properties, 2 default properties and 2 methods.
// Create 3 instances of the laptop object.