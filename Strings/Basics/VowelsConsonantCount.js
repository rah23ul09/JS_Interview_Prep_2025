let message = "Hello, Rahul"
let vowel = 0, consonant = 0
message = message.toLowerCase()

for(let ch of message ){
    if(ch >= 'a' && ch <= 'z'){
        if("aeiou".includes(ch)) vowel++
        else consonant++
    }
}

console.log(`Number of vowels in string are : ${vowel}`)
console.log(`Number of consonants in string are : ${consonant}`)