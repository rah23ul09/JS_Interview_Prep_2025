const prompt = require('prompt-sync')()

let ch = prompt("Enter the character to check : ")

if(ch.length == 1){
     ch = ch.toLowerCase()
    if(ch === 'a'|| ch === 'e'|| ch === 'i'|| ch === 'o'|| ch === 'u') 
        console.log(`${ch} is vowel.`)
    else console.log(`${ch} is consonant`)
} 
else console.log(`${ch} is not a letter`)
   