/*
    Synchronous codes -- Executes line by line consecutively in a sequential manner, it is code that waits for an operation to complete,

    Asynchronous codes -- Allows multiple operations to be performed without waiting, doesn't block the execution flow and allows the program to continue.(I/O operations, network requests, fetching data, etc)
    They can be handled with callbacks, promises, Async/Await.
*/

// Callback -- is a function that is passed as an argument to another function, it can be used to make the program run synchronously. It can be used to handle http requests, interacting databases, etc

// console.log('Start');
function func1(call, x, y){
    setTimeout(() => {
        console.log(x + y);
        console.log("Task 1")
        call();
    }, 2000)
};

function func2(){
    console.log("Task 2");
    console.log("Task 3");
}
func1(func2, 4, 8);

// Create a function that sums three numbers and takes in a callback function that displays the result of the sum of the three numbers.

// callback hell -- This is when callbacks are nested within other calbacks to the extent where the code becomes difficult to read.
function task1(callback){
    setTimeout(() => {
        console.log("Task 1 Complete");
        callback();
    }, 2000)
};
function task2(callback){
    setTimeout(() => {
        console.log("Task 2 Complete");
        callback();
    }, 1000)
};
function task3(callback){
    setTimeout(() => {
        console.log("Task 3 Complete");
        callback();
    }, 3500)
};
function task4(callback){
    setTimeout(() => {
        console.log("Task 4 Complete");
        callback();
    }, 2500)
};
// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => { console.log("Tasks Completed.")})
//         })
//     })
// });

// Promises In Javascript
// Promise -- This is an object that manages asynchronous operations. We wrap a promise object around asynchronous code. A promise returns a value (resolved or rejected)
// Syntax: new Promise((resolve, reject) => {asynchronous code});
function tasked1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 1 Complete");
        }, 2000);
    })
};
function tasked2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const taskDone  = true;
            !taskDone ? resolve("Task 2 Complete") : reject("Task 2 Not done");
        }, 1000);
    })
};
function tasked3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tasking 3 Complete");
        }, 3000);
    })
};
function tasked4(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Taskest 4 Complete");
        }, 500);
    })
};

tasked1().then(value => {console.log(value); return tasked2()})
        .then(value => {console.log(value); return tasked3()})
        .then(value => { console.log(value); return tasked4()})
        .then(value => {console.log(value); return console.log("All tasks completed.")})
        .catch(error => console.log(error));

// Async/Await
// Async -- makes a function return a promise while Await  -- makes a function wait for a promise.

async function doTasks(){
    try{
        const taskOne = await tasked1();
        console.log(taskOne);
        const taskTwo = await tasked2();
        console.log(taskTwo);
        const taskThree = await tasked3();
        console.log(taskThree);
        const taskFour = await tasked4();
        console.log(taskFour);
        console.log("You finished all your tasks!")
    } catch(error){
        console.log(error);
    }
};
doTasks();