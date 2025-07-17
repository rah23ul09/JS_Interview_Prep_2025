const prompt = require('prompt-sync')()

let number1 = parseFloat(prompt("Enter number1 : "))
let number2 = parseFloat(prompt("Enter number2 : "))
let number3 = parseFloat(prompt("Enter number3 : "))

if((number1 > number2) && (number1 > number3)) 
    console.log(`Number ${number1} is greater`)
else if(number2 > number3) console.log(`Number ${number2} is greater`)
else console.log(`Number ${number3} is greater`)