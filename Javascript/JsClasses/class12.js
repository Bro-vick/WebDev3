// Javascript Built-In Objects

// Date : Used to work with dates and times.
// methods: getDate(), getMonth(), getFullYear(), getHours(), etc.

let today = new Date();

console.log(today)
console.log(today.getDate())
console.log(today.getDay())
//  Create an array of days use the get day method, to output the current day i.e "Today is Thursday". 

const days = ["Sunday", "Monday", "Tuesday", "Wed", "Thursday", "Fri", "Sat"];
console.log(`Today is ${days[today.getDay()]}`);

console.log(today.getMonth())
// Create an array of months use the get month method, to output the current monthh i.e "We are in the month of November". 
console.log(today.getHours())
console.log(today.getFullYear())
console.log(today.toDateString())

let months = []

// Math: Provides inbuilt mathematical functions and constants.
// (Properties: PI, E, etc), (Methods: abs(), ceil(), floor(), max(), random(), etc)

// Properties
console.log(Math.PI);
console.log(Math.E);
// Methods
console.log(Math.abs(-5)); 
console.log(Math.sqrt(16)); // To give the square root of a number
console.log(Math.random()); // This generates a random number betwen 0 and 1
// Multiply by 10 for random numbers btw 1 and 10
console.log("Random number")
console.log(Math.random() * 10);
let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber);

console.log(Math.floor(3.8)); // 3
console.log(Math.ceil(3.1)); // 4

// Create a function that generates a number of random integers n, random integers btw 1 and 100, depending on the input. 
// i.e randInt(5) -- 13, 2, 78, 21, 84
function randInt(n){
    let output = ""
    for (let i = 0; i < n; i++){
        let randInt = Math.round(Math.random() * 10);
        (i+1 == n) ? output += ` ${randInt}.` : output += ` ${randInt}, `;
    }
    console.log(output)
};
console.log("Random Numbers:")
randInt(5);

// Number: Represents numerical data.
// methods: toString(), toFixed(), toPrecision(), etc

let num = 123.456;
console.log(num.toString()); // Converts to string ("123.456")
console.log(num.toFixed(2)); // Rounds to 2 decimal places (123.46)
console.log(num.toPrecision(4)); // Rounds to 4 significant digits (123.5)