/*
    What is Javascript?

    Javascript is a programming language initially designed to interact with elements of web pages. 
    It allows us to add interactivity to a web page, its used to enhance our html and css, such as validating forms, handling mouse events, adding reponsiveness to the web page, etc.
    Javascript is an Object-based Scripting Language which is lightweight and cross platform. It's a translated language and not a compiled language.
    The javascript translator (embedded in the browser) is responsible for translating the javascript code for the browser.

    Applications: Client-side validation, Dynamic drop-down menus, Current date and time display, Displaying pop-ups and dialog boxes, etc.

*/
// We use comments to add more description to our code. 
/*
    This is a multi line comment
*/
// This is a single line Comment
/*
    What are variables?
    Variables are containers for storing information. 
*/
    var y;
    var x = 5;

// Rules For Naming Variables:
/*
  -- let and const are the most used to declare a variable while var is outdated.
  1) Use a descriptive Name
  2) Start with a letter, an undescore or dollarsign, but not with a number.
  3) Avoid Reserved Keywords. E.g let, var, for, while, const, class, if, etc.
  4) Use camelCase for multi-word names e.g myBestFriend, userName.
  5) Case Sensitivity: myVar and MyVar are treated as two different variables.
  6) Avoid Special Characters: e.g @, !, #, %, etc Apart from (_ and $)

  Case Conventions
    1) Camel Case: Here the first letter is lowercase and the first letter of subsequent words are capitalized. (e.g myBestFriend, customerOrderDetails, etc).
    2) Pascal Case: Here the first letter of every word is capitalized. (e.g MyVariableName, MyBestFood, etc).
    3) Snake Case: All letters are in lowercase but words are seperated by underscores. (e.g my_best_friend, customer_order_details, etc).
    4) Kebab Case: All letters are in lowercase but words are seperated by hyphen. (e.g my-best-friend, customer-order-details, etc).
*/
// Declaring a Variable 
let userName;
// Initializing a variable
userName = "George";
let age = 30;
const sex = "Male";
age = 25;
let country = "Nigeria";
// sex = "Female"; This gives an error, A variable declared with the const keyword cannot be reassigned another value, that is where let comes in.
console.log("Hello World");
console.warn("Hello this is a warning");
console.error("This is an error");
console.log(userName)

// Data Types in Javascript
// 1) Strings: Are used to represent text

let lastName = "George";
let firstName = "Victor";
// Concatenation: is a way of merging two strings, or a string and a variable.
let greet = "Hi " + lastName + " How are you today?";
let bye = "Alright goodbye " + firstName;

// String Interpolation || Template literal
let sayHello = `Hello ${firstName}, How are you doing?`;

console.log(greet);
console.log(bye);
console.log(sayHello);

console.log("The type of the sayHello variable is a ", typeof(sayHello))

// We use the typeof() function to check the data type of a variable.
// 2) Number: It's used to represent numeric values, whether integers or decimals(floats). 
let user_age = 25;
const pi = 3.142;
console.log(age);
console.log(typeof(pi));
console.log(user_age + pi);

// 3) Boolean: They are used to represent logical values indicating true or false.
const isClosed = true;
const isOpen = false;

console.log(isClosed);
console.log(typeof(isOpen));

// 4) Null: This represents the intentional omission/absence of a value
let course = null;
let user = null;
console.log(typeof(user));

// 5) Undefined: This represents a variable that has been declared but not assigned a value.
let a, b, c;
console.log(typeof(a));

// 6) Bigint: Bigint is a numeric data type that can represent integers with arbitrary precision. It is denoted by appending 'n' to the end of an integer.
let bigNumber = 123456789012345678901234567890n;

// 7) Object: They are a collection of key-value pairs, where values can be of any data type. Including other objects, arrays, or functions.
const person = {
    name: 'John',
    age: 30,
    isAdmin: false
};