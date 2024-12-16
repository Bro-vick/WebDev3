/*
    Problem: Create an ATM Machine Simulator
    Write a JavaScript program to simulate an ATM machine with the following functionalities:
    Check Balance: Display the current balance.
    Deposit: Allow the user to deposit money into their account.
    Withdraw: Allow the user to withdraw money from their account.
    Exit: Terminate the program.
    Your program should:
    Display a menu of options to the user.
    Prompt the user to choose an option.
    Perform the selected operation based on the user's choice.
    Continuously prompt the user until they choose to exit.
    Remember to handle cases such as insufficient funds for withdrawals and invalid input.

    For Example:
    Welcome to the ATM Machine
    1. Check Balance
    2. Deposit
    3. Withdraw
    4. Exit
    Enter your choice: 1
    Your current balance is: $1000
    Enter your choice: 2
    Enter amount to deposit: 500
    Deposit successful. Your new balance is: $1500
    Enter your choice: 3
    Enter amount to withdraw: 200
    Withdrawal successful. Your new balance is: $1300
    Enter your choice: 4
    Thank you for using the ATM. Goodbye!

    Use Switch statements or conditionals.
*/


alert(`Welcome To The ATM machine`);
let balance = 1000;
while(true){
    let choice = prompt(`Enter your choice \n 1.) Check Balance \n 2.) Deposit \n 3.) Withdraw \n 4.) Exit `);
    switch(choice){
        case '1':
            console.log(`Your current balance is $${balance}`);
            break;
        case '2':
            let depositAmount = parseFloat(prompt('Enter amount to deposit:'));
            balance += depositAmount;
            console.log(`Deposit Successful new balance $${balance}`);
            break;
        case '3':
            let withdrawAmount = parseFloat(prompt(`Enter Amount to withdraw:`));
            if (withdrawAmount >= balance){
                console.log('Insuffecient funds');
            } else {
                balance -= withdrawAmount;
                console.log(`Withdrawal successful new balance is $${balance}`);
            };
            break;
        case '4':
            console.log(`Exiting...`);
            break;
        default:
            console.log('Invalid Choice Please try again!');
    };
    if (choice === '4'){
        break;
    };
};