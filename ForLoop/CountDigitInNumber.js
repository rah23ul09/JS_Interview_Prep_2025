const prompt = require('prompt-sync')()

let number = parseInt(prompt("Enter the number : "))
let count = 0
let temp = Math.abs(number)

if(temp === 0) count =1
else{
    while(temp > 0) {
        count ++;
        temp = Math.floor(temp/10)
    }
}
console.log(`Count of number ${number} is ${count}`)