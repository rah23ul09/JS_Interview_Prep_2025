const prompt = require('prompt-sync')()

let number1 = parseFloat(prompt("Enter number 1 : "))
let number2 = parseFloat(prompt("Enter number 2 : "))

if (number1 > number2) console.log(`Number ${number1} is greater`)
else console.log(`Number ${number2} is greater`)