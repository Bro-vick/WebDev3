// Using Conditionals: Conditionals enable us handle multiple conditions in our program.
/*
    Syntax:
        if(condition){
            Code block or Execution
        };
        or (with "else" statement to execute a code when the if condition is false.)
        if(condition){
            Code block or Execution
        }else{
            Code block or Execution
        };
        or (with "else if" statements to check for multiple conditions)
         if(condition){
            Code block or Execution;
        } else if(condition){
            Code block or Execution;              
        }else{
            Code block or Execution;
        };
    Write a program that prompts the user for their name and age and then console.log "Hi username you are eligible to vote!" if the user age is greater than or equal 18, and vice versa.
*/

let username = prompt("Please Enter your name: ");
let age = prompt("Please Enter your age: ");
if(age >= 18){
    console.log(`Hi ${username} you are eligible to vote.`);
} else{
    console.log(`Sorry ${username} you are eligible to vote.`);
};

/*
    Write a program that takes in the user surname, age, sex(m/f) and according to the users input console.log if the user is a man, boy, girl or woman. 
    e.g "Hi John you are 25yrs Old and you're a man." 
*/
let gender = prompt("Enter your gender (m/f):")
let pname = prompt("Enter Your Name: ");
if (age >= 20 && (gender == 'm' || 'M')){
    console.log(`Hi ${pname}, you are ${age} year's Old and you are a man. `);
}else if (age < 20 && gender == 'm'){
    console.log(`Hi ${pname}, you are ${age} year's Old and you are a Boy. `);
}else if (age >= 20 && gender == 'f'){
    console.log(`Hi ${pname}, you are ${age} year's Old and you are a Woman.`);
}else{
    console.log(`Hi ${pname}, you are ${age} year's old and you are a girl.`);
};

// Write a program that asks the user to enter the day(i.e saturday), time of the day (i.e 00 - 23 hrs and 00-12:morning, 13-17:afternoon, 18-23: evening) and weather condition (i.e Sunny, rainy, cold). According to the user input display the output. e.g 'Hi, it's a rainy saturnad evening, today.'

let day = prompt("What is the current day? ");
let time = prompt("What is the current time(00-23hrs? ");
let weather = prompt("What is the current weather condition? ");

if(time <= 12 && day.toLowerCase() == 'sunday' && weather == 'sunny'){
    console.log(`Hi its, a sunny sunday morning, today. `)
}else if(time <= 17 && day.toLowerCase() == 'monday' && weather.toLowerCase() == 'rainy'){
    console.log(`Hi its, a ${weather} ${day} afternoon, today. `)
} else{
    console.log(`Hi its, a ${weather} ${day} evening, today. `)
};

// Ternary operators
// Using Ternary Operaators: Syntax: (Condition) ? code execution : code execution;
(age >= 18) ? document.write(`Hi ${username} you are eligible to vote.`) : document.write(`Sorry ${username} you are eligible to vote.`);