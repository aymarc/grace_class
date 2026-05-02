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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (answer) => {
  const number = parseInt(answer);
  console.log(factorial(number));
  rl.close();
});

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = number; i > 1; i--) {
      result = result * i;
    }
    return result;
  }
}