/*
    What are Arrays?
    Arrays are special variables that can hold more than one value. 
    syntax:
    const arrayName = [arrayItem1, arrayItem2, ...];
*/
// They can be created using the array litteral notation or using the array constructor.

// Using the array literal notation
const numbers = [1, 2, 3, 4, 5, 6];

// Using the array Constructor
const evenNumbers = new Array(2, 4, 6, 8, 10);

// Arrays can contain different data types as values or items.
const newArray = ["john", "Emeka", 1, 34, 50, true, false, null, [3, "Sub", 9]];

// An Index is the numerical representation of the position of an item in an array, Indexes start from 0. Arrays can be accessed by their index.

// Accessing Arrays 
// syntax: arrayName[index]
console.log(newArray[1]);
console.log(newArray[5]);
// Accessing Sub Arrays
console.log(newArray[8][1]);

// Create an array of 6 different colors

const colors = ["red", "black", "blue", "yellow", "green", "purple"];
console.table(colors)

// The length property in the array gives the total number of items present in the array, this is different from the index.
console.log(colors.length);

for(let i = 0; i < colors.length; i++ ){
    console.log(`I love ${colors[i]} cars.`);
};












