//Write a function that takes the firstName, lastName and return the fullName.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your first name : ', (firstName) => {
  rl.question('Enter your last name : ', (lastName) => {
    console.log("Your full name is: " + fullName(firstName, lastName));
    rl.close();
  });
});

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

