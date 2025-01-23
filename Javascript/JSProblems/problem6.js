/*
    What is a palindrome?
    
    A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

    str1 = madam;
    str2 = dede;
    s = "Was it a car or a cat I saw?"
    considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

    Create a function called checkPalindrome() return true if a string is a palindrome.
    checkPalindrome(str1); output: true
    checkPalindrome(str2); output: false
*/

function isAlphaNum(char){
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')
}
function checkPalindrome(string){
    let str = "";
    for(let ch of string){
        if(isAlphaNum(ch)){
            str = str + ch.toLowerCase();
        }
    };
    console.log(str);
    let newStr = str.split('').reverse().join('');
    console.log(newStr)
    console.log(str === newStr)
    return str === newStr 
};
let str2 = 'dede';
let str3 = "Was it a car or a cat I saw?"
checkPalindrome(str2);
checkPalindrome(str3);



let password = 'fineBoy123'; 
let confirmPassword = 'fineBg123'; 
// Confirm that they are of the same characters. 

function checkPassword(){
    if(password.length !== confirmPassword.length){
        console.log("Passwords do not match: Length error");
        return false
    };
    for(let i = 0; i < password.length; i++){
        if(password[i] !== confirmPassword[i]){
            console.log("Passwords do not match: Char error");
            return false;
        };
    };
    console.log("Password Correct");
    return true;
};
checkPassword();