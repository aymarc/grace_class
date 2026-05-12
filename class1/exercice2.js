//Exercice2: Write a function that takes a number and return its factorial.
/*const number = parseInt(prompt("Enter a number:"));

function factorial(number){
  
    if (number === 0 || number === 1){
    return 1;
} else{
    let result =1;
    for(let i= number; i>1; i--){
        result=result*i;
    }
    return result;

}

}
 console.log(factorial(number));*/

 //n! = n * (n-1) * (n-2) * .... * 1 => 5! = 5 * (5-1) * (5-2) * (5-3) * (5-4) = 5 * 4 * 3 * 2 * 1 = 120

 function newFactorial(n){
  //res of all numbers 
  let res = n
  //n must not less than 1
  if(n < 1){
    return n;
  }

  //loop through all numbers
  for(let i = 1; i < n;  i++){
    // mutiply n by n-i untill n-i is 1
    res *= (n-i);
  }
  return res;
 }


 console.log(newFactorial(5));


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter a number: ', (answer) => {
//   const number = parseInt(answer);
//   console.log(factorial(number));
//   rl.close();
// });

// function factorial(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     let result = 1;
//     for (let i = number; i > 1; i--) {
//       result = result * i;
//     }
//     return result;
//   }
// }