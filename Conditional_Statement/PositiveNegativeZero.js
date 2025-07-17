const prompt = require('prompt-sync')();    // import prompt

let number = parseFloat(prompt("Enter a number : "))

if(number > 0) console.log("Number is positive")
else if (number < 0) console.log("Number is negative")
else console.log("Number is zero")