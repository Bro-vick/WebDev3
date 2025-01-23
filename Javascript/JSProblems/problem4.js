// Create a function isPrime(n), that checks if a number n, is a prime number or not.
// What is a prime number?
// factor 6, 8
function isPrime(n){
    if(n <= 1){
        return true;
    };
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    };
    return true;
}

console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))