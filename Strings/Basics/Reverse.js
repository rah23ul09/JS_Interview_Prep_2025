const prompt = require('prompt-sync')()
let string = prompt("Enter the string to reverse : ")
let reverse = ""
let original = string

for(let i = string.length - 1; i >= 0; i--) {
    reverse += string.charAt(i)
}
console.log(`Reverse string is : ${reverse}`)

// using reverse method

reverse = string.split("").reverse().join("")
console.log(`Reverse string is : ${reverse}`)

if(original.toLowerCase === reverse.toLowerCase) console.log("String is palindrome")
else console.log("String is not palindrome")