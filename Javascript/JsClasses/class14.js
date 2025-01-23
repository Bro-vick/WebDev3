// Storing data in the browser: We can do this using local storage, session storage and cookies.

// Local Storge: This provides a way to store key-value pairs in the browser with no expiration date. The data persists even after the browser is closed and reopened. It provides a much larger storage limit (around 5 - 100mb per domain) compared to cookies.

// let firstname = prompt("Enter your first name:");
// let lastname = prompt("Enter your last name:");

// The set item method is used to store and update data in the local storage
// localStorage.setItem("First-Name", firstname);
// localStorage.setItem("Last-Name", lastname);

// The getItem method is used to access the local storage
// let last = localStorage.getItem("Last-Name");
// document.getElementById("welcome").textContent = `Hi ${last}, You are welcome to Javascript!!! 🤣😇😇😰😰😰😰😭😭😭`;
// document.write(`Hi ${last}, You are welcome to Javascript!!! 🤣`)

// Clearing the local storage
// localStorage.clear();


// Session Storage: This is similar to the localstorage but persists only for the duration of the page session. Once the browser tab is closed the data is cleared, It is useful for storing tempoary data, that we don't need to persist across sessions.
// sessionStorage.setItem("age", 30);
// sessionStorage.setItem("username", "Emeka115");

// Session storage uses the same methods as localstorage.

// What are Cookies in Javascript? 

// JSON
/*
    JSON stands for Javascript Object Notation, It is a text format for storing and transporting data. JSON makes it possible to store javascript objects as text. Example
    '{"name":"John","age":30, "car":null}' // This is an example of a JSON string, it defines an object with three properties: name, age, car and each poperty has a value.

    // The JSON format can be converted to a javascript object using JSON.parse()   
    // Javascript also has an inbuilt function for converting an object into a         
    string: JSON.stringify(). This process is knwon as object serialization and deserialiation
*/
const person = {
    lastname: "John",
    age: 40,
    Country: "Nigeria"
};
console.log(person)
console.log(typeof(person))

// Object Serialization -- Converting JS Objects to JSON strings
const jsonString = JSON.stringify(person)
console.log(jsonString)
console.log(typeof(jsonString))

// Object deserialization -- Converting JSON string to JS object
const jsObject = JSON.parse(jsonString);
console.log(jsObject);