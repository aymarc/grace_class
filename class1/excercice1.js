//Exercice1: Write a function that takes a number and output whether it is even or odd.
const number = prompt("Enter a number:");

function isEvenorOdd() {
    if (number % 2 === 0) {
        console.log("The number is even");
    }
    else {
        console.log("The number is odd");
    }
}

isEvenorOdd();