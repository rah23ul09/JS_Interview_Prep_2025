const prompt = require('prompt-sync')()
let number = parseInt(prompt("Enter the number : "))
let original = number

let countDigit = 0
let temp = number
while(temp != 0) {
    countDigit ++
    temp = Math.floor(temp/10)
}

let sum = 0
temp = number
while(temp != 0) {
    let digit = temp % 10
    sum += Math.pow(digit, countDigit)
    temp = Math.floor(temp/10)
}

if(original === sum) console.log("Number is armstrong")
else console.log("Number is not armstrong")