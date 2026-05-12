//Exercice1: Write a function that takes a number and output whether it is even or odd.
/*const number = prompt("Enter a number:");

function isEvenorOdd() {
    if (number % 2 === 0) {
        console.log("The number is even");
    }
    else {
        console.log("The number is odd");
    }
}

isEvenorOdd();*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



//console.log(isEvenorOdd(2));

const isGlow = false;
if(isGlow){
    const isEvenorOdd = (number) => {
        if (number % 2 === 0) {
            console.log("The number is even");
        }
        else {
            console.log("The number is odd");
        }
    }
}


rl.question('Enter a number: ', (answer) => {
    const number = parseInt(answer);
    isEvenorOdd(number);  
    rl.close();
  });



  /**
   * Note: Scope is the set of rules that determines the visibility(availability) of variables in different parts of the code.
   * There are three types of scope in JavaScript:
   * 1. Global scope
   * 2. Function scope
   * 3. Block scope
   * 
   * Global scope: Variables declared outside any function or block are in the global scope.
   *              They are accessible throughout the program.
   * Function scope: Variables declared inside a function are in the function scope.
   *                 They are accessible only within the function.
   * Block scope: Variables declared inside a block are in the block scope.
   *              They are accessible only within the block.
   * 
   * 
   * Note: Hoisting is the process of moving the declaration of variables to the top of the scope.
   *       It is done automatically by the JavaScript engine.
   *       It is done only for var declarations, not for let and const declarations.
   *       It is done only for function declarations, not for function expressions.
   *       It is done only for class declarations, not for class expressions.
   *       It is done only for import declarations, not for import expressions.
   *       It is done only for export declarations, not for export expressions.
   *       It is done only for import declarations, not for import expressions.
   * */