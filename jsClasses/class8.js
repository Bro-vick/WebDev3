const colors = ["red", "black", "blue", "yellow", "green", "purple"];
// Array Method
// 1) join(): This is used to join all array elements into a string.
let colorsJoin = colors.join("...");
console.log(colorsJoin);

// 2) pop(): Is used to remove the last element from an array.
let popColors = colors.pop();
console.log(popColors);
console.table(colors);

// 3) split(): Converts a string into an array by splitting it at specified delimiters.
let colorsSplit = colorsJoin.split("...");
console.log(colorsSplit);

// 4) push(): Adds an item to the end of an array
colors.push("Grey");
colors.push("black");
console.table(colors);

// 5) shift(): is used remove the first element in an array.
let colorShift = colors.shift();
console.log(colorShift);
console.table(colors); 

// 6) unshift():  This method is used to add an element to the start of the array.
colors.unshift("purple");
console.table(colors);

// 7) delete: To delete an item of an array at a specific index, but delete leaves an undefined space in the array
delete colors[3];
console.table(colors);

// 8) splice(): is used to add or remove elements at a particular position.
// Using splice to add elements
colors.splice(2, 0, "pink", "lightblue");
// The first parameter (2) defines the position where the new elements should be added or spliced in.
// The second parameter (0) defines how many elements to be removed.
// The elements to be added
console.table(colors);
// Using splice to remove elements
colors.splice(3, 1);
console.table(colors);

// 9) slice(): This method creates a new array, it takes two arguments, the starting index and the ending index.
const fruits = ["orange", "apple", "grape", "pear", "coconut", "carrot"];
let newFruits = fruits.slice(2, 4);
console.table(newFruits);
console.table(fruits);

// 10)  concat() method creates a new array by merging existing arrays.
const colorFruits = colors.concat(fruits);
console.table(colorFruits);

// 11) fill() This method fills an array with a given value, it overwrites the original array, if the start and end position isn't specified, all elements would be filled.
fruits.fill("Test")
console.table(fruits)

colorFruits.fill("Color", 1, 8)
console.table(colorFruits);

// 12) sort(): The sort() method sorts an array alphabetically
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort()
console.table(fruits2)
let num1 = [2, 1, 4, 9, 5];
console.table(num1.sort())
let num2 = [40, 100, 1, 5, 25, 10];
console.table(num2.sort())
/*
By default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana").
If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.
You can fix this by providing a compare function:
*/
console.table(num2.sort(function(a, b){return a - b}))
// Using arrow function
console.table(num2.sort((a, b) => b - a))
