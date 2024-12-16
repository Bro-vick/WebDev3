// Using Loops In Javascript
/*
    -- We often need to repeat some actions/Executions. Loops are used to repeat the same code multiple times.

    # The "While loop": Is used when we do not know the number of iterations beforehand.
    syntax: 
    while(condition){
        // do some code
        // Iteration (Increment or decrement)
    }
*/
let a = 10;
while(a){
    console.log(`Student Number ${a}`);
    a--;
};
let count = 0;
while(count <= 100){
    console.log(count);
    count +=5;
};
// The Effect of break and continue statements
for(let i = 0; i <= 10; i++){
    if(i == 5){
        continue;
    }else{
        console.log(i);
    };
};
for(let i = 0; i <= 10; i++){
    if(i == 5){
        break;
    }else{
        console.log(i);
    };
};