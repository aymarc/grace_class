"use strict";

//Variables & Data Types
let anotherVarName;
const varName = "Some characters";
let varName2 = 123;
var varName3 = true;
let varArray = [1, 2, 3, 4, 5];
const varObject = Object.freeze({ name: "John", age: 30, city: "New York", address:{home:"123 Main St", office:"456 Office Rd"}});

//delete varObject.name;
// delete varObject.address;
// delete varObject.age;
// delete varObject.city;

console.log("first variable: ", varName);
console.log("second variable: ", varName2);
console.log("third variable: ", varName3);
console.log("fourth variable: ", anotherVarName);
console.log("object variable: ", JSON.stringify(varObject)); // time complexity 0(1)


// types
// console.log("type of varName: ", typeof varName);
// console.log("type of varName2: ", typeof varName2);
// console.log("type of varName3: ", typeof varName3);
// console.log("type of anotherVarName: ", typeof anotherVarName);
// console.log("type of varArray: ", typeof varArray);
// console.log("type of varObject: ", typeof varObject);


//
//Operators & Expressions
//Arithmetic, comparison, logical, ternary operators


const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;  //expression

console.log("We have several operators in javascript such as: +, -, *, /, %, ==, ===, !=, !==, >, <, >=, <=, &&, ||, !, ? :");

console.log("\nArithmetic Operators:");
console.log("Addition: ", 5 + 3);
console.log("Subtraction: ", 5 - 3);
console.log("Multiplication: ", 5 * 3);
console.log("Division: ", 5 / 3);
console.log("Modulus: ", 5 % 3); //10 % 2 = 0

console.log("\nComparison Operators:");
console.log("Equal to (==): ", 5 == "5"); // true, because it performs type coercion
console.log("Strict equal to (===): ", 5 === "5"); // false, because it does not perform type coercion
console.log("Not equal to (!=): ", 5 != "5"); // false, because it performs type coercion
console.log("Strict not equal to (!==): ", 5 !== "5"); // true, because it does not perform type coercion
console.log("Greater than (>): ", 5 > 3);
console.log("Less than (<): ", 5 < 3);
console.log("Greater than or equal to (>=): ", 5 >= 3);
console.log("Less than or equal to (<=): ", 5 <= 3);

console.log("\nLogical Operators:");
console.log("Logical AND (&&): ", true && false); // false
const a = 7;
console.log("Logical AND used between two comparisons: ", (a > 5) && (a < 10)); // true a (  [5,10]
console.log("Logical OR (||): ", true || false); // true
console.log("Logical NOT (!): ", !true); // false


console.log("\nTernary Operator:");
const age = 18;
const canVote = age >= 18 ? "Yes" : "No"; 

/*

 if(age >= 18) {
    canVote = "Yes";
 } else {
    canVote = "No";
 }

*/
console.log("Can vote: ", canVote);


//Control Flow
// if/else, switch statements, loops (for, while, do-while)
console.log("\nControl Flow Examples:");

// if/else
const number = 10;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// switch statement
const day = "Monday";
switch (day) {  
    case "Monday": 
        console.log("It's Monday!");
        break;
    case "Tuesday":
        console.log("It's Tuesday!");
        break;
    default:
        console.log("It's another day!");
}

// for loop
console.log("\nFor Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
console.log("\nWhile Loop:");
let j = 0;
while (j < 5) {
    console.log(j);
    j++; // j + 1
}

// do-while loop
console.log("\nDo-While Loop:");
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);


//Functions
// Declarations, expressions, arrow functions, parameters

console.log("\nFunctions Examples:");

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));
function add(a, b) {
  return a + b;
}
console.log("Addition: ", add(5, 3));

//void function
function logMessage(message) {
    console.log("Log: ", message);
}
logMessage("This is a void function example.");

// Function expression
const greetExpression = function(name) {
    return `Hi, ${name}!`;
};
console.log(greetExpression("Bob"));

// Arrow function
const greetArrow = (name) => `Hey, ${name}!`;
console.log(greetArrow("Charlie")); 

/*
f(x) = pi * x * x; //function declaration

function findArea(x){ 
    return pi * x * x; 
}

*/

/*
f(3) = pi * 3 * 3 

     = 3.14 * 9

     = 28.26   //function call
     
const area1 = findArea(3);

*/


/*
Exercice1: Write a function that takes a number and output whether it is even or odd.
Exercice2: Write a function that takes a number and return its factorial.
Exercice3: Write a function that takes the firstName, lastName and return the fullName.
*/



