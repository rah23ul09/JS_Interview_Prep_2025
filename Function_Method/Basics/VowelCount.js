// Using funciton
function vowelCount(str){
    let vowel = 0
    let lowerStr = str.toLowerCase()

    for(let ch of lowerStr){
        if(ch >= 'a' && ch <= 'z') {
            if("aeiou".includes(ch)) vowel++
        }
    }
    return vowel
}

console.log("Number of vowel are : ", vowelCount("I am rahul"))

// Using object
const CountVowel = {
    vowelsCount : function(str) {
        let vowel = 0
        let lowerStr = str.toLowerCase()

        for(let ch of lowerStr) {
            if("aeiou".includes(ch)) vowel++
        }
        return vowel
    }
}

console.log("Number of vowel are : ", CountVowel.vowelsCount("I am updated Rahul"))

// Using class
class VowelCount{
    static countVowels(str) {
        let vowel = 0
        let lowerStr = str.toLowerCase()

        for(let ch of lowerStr){
            if("aeiou".includes(ch)) vowel++
        }
        return vowel
    }
}

console.log("Number of vowel are : ", VowelCount.countVowels("I am new version of Rahul"))