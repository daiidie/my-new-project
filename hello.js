const chalk = require('chalk')

for(let i = 0; i < 10; ++i) {
  console.log(chalk.bold.rgb(0,100 + i * 10,200) ("hello DWD bim bam"))
}

var readlineSync = require('readline-sync');

// Wait for user's response.
var readlineSync = require('readline-sync'); userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password).
var readlineSync = require('readline-sync'); favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');