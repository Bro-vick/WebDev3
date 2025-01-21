// Function Expression: This  is another way to define a function, here we use a variable and store the returned value in that variable.

let sub = function(a, b){
    return a - b;
}
console.log(sub(20, 6));

// Arrow Functions
let multiply = (x, y) => x * y;

console.log(multiply(3, 5));

const printNumbers = (n) => {
    for(let i = 1; i <= n; i++){
        console.log(`Phone number ${i}`);
    };
};

// String Methods
let str = "Welcome to Javascript"
console.log(str.length)

let upperStr = str.toUpperCase();
console.log(upperStr)

// The split method is used to split the string into an array
let spltStr = str.split(" ")
console.log(spltStr)

console.log(spltStr.join(" "));

console.log(str.replace("to", "#"))
console.log(str.replace(/to/g, "#"))

console.log(str.includes("too"))


//slice(start, end) method
console.log(str.slice(0, 7).toUpperCase());

//substring: is similar to the slice method but doesn't allow negative indices
console.log(str.substring(7));

// charAt(index): Returns the character at a specified index
console.log(str.charAt(11));

// charCodeAt(index): Returns the unicode of the character at the specified index
console.log(str.charCodeAt(12));

// concat: 
let str1 = "Hi there";
let str2 = str1.concat(" ", str);
console.log(str2);


let str3 = str1.split("").reverse();
console.log(str3)


