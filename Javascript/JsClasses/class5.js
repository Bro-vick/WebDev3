// Switch Statements In Javascript
/*
    Javascript switch statements provides a way to execute different blocks of code, based on different conditions. It is an alternative to using multiple else...if, else if statements, when there are multiple conditions to check for.

    Syntax:
    switch(expression){
        case value1:
        // code;
            break;
        case value2:
        // code;
            break;
        case value3:
        // code;
            break;
        ...
        default:
            // default code;
    }
    expression is the value to be compared, 
    case value1, value2, value3. represent the possible values of the expression,
    break statement terminates the switch statement. Without it the execution would continue into the next case.
    Default specifies the code to run if none of the cases match. N/B: This is optional
    npm i prompt-sync to install the prompt sync package that enables us use prompt function on the terminal.
*/
let day = prompt("Enter your birth-Day: i.e monday");
let birthdayMessage = "";
switch(day.toLowerCase()){
    case "monday":
        birthdayMessage = "Hi there, you were born on a Monday";
        break;
    case "tuesday":
        birthdayMessage = "Hi there, you were born on a Tuesday";
        break;
    case "wednesday":
        birthdayMessage = "Hi there, you were born on a Wednesday";
        break;
    case "thursday":
        birthdayMessage = "Hi there, you were born on a Thursday";
        break;
    case "friday":
        birthdayMessage = "Hi there, you were born on a Friday";
        break;
    default:
        birthdayMessage = "Hi there, you weren't born on a working day";
};
console.log(birthdayMessage);

let grade = prompt("Enter your grade: ");
let result = "";

switch(true){
    case (grade >= 90):
        result = "Congratulations you got an A";
        break;
    case (grade >= 80 && grade < 90):
        result = "Congratulations you got an B";
        break;
    case (grade >= 70 && grade < 80):
        result = "Congratulations you got an C";
        break;
    default:
        result = "Sorry you did not pass";
}