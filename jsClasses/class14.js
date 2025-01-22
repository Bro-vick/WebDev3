// Storing data in the browser: We can do this using local storage, session storage and cookies.

// Local Storge: This provides a way to store key-value pairs in the browser with no expiration date. The data persists even after the browser is closed and reopened. It provides a much larger storage limit (around 5 - 100mb per domain) compared to cookies.

let firstname = prompt("Enter your first name:");
let lastname = prompt("Enter your last name:");

// The set item method is used to store and update data in the local storage
localStorage.setItem("First-Name", firstname);
localStorage.setItem("Last-Name", lastname);

// The getItem method is used to access the local storage
let last = localStorage.getItem("Last-Name");
document.getElementById("welcome").textContent = `Hi ${last}, You are welcome to Javascript!!! 🤣😇😇😰😰😰😰😭😭😭`;
document.write(`Hi ${last}, You are welcome to Javascript!!! 🤣`)

// Clearing the local storage
localStorage.clear();