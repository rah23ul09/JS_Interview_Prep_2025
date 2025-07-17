const prompt = require('prompt-sync')()
let number = parseInt(prompt("Enter the number : "))
let original = number
let reversed = 0

while(number != 0) {
    let digit = number % 10                     // remove the modulus
    reversed = reversed * 10 + digit            // add modulus to reversed
    number = Math.floor(number/10)              // remove last digit from number
}

console.log(`Reverse of entered number is ${reversed}`)

if(original === reversed) console.log("Number is palindrome")
else console.log("Number is not palindrome")