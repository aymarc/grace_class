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

rl.question('Enter a number: ', (answer) => {
  const number = parseInt(answer);
  isEvenorOdd(number);  
  rl.close();
});

function isEvenorOdd(number) {
    if (number % 2 === 0) {
        console.log("The number is even");
    }
    else {
        console.log("The number is odd");
    }
}