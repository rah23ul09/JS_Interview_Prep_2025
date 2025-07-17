const prompt = require('prompt-sync')()

let number = parseFloat(prompt("Enter the number : "))

if(number % 2 == 0) console.log("Number is even")
else console.log("Number is odd")