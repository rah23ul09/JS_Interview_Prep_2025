const prompt = require('prompt-sync')()

let year = parseInt(prompt("Enter year to check : "))

if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
    console.log(`Year ${year} is leap year`)
else console.log(`Year ${year} is not a leap year`)