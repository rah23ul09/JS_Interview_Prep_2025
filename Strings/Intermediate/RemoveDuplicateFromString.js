let str = "What am I, I am myself"
let result = ""

for(let ch of str){
    if(!result.includes(ch)) result += ch
}
console.log("After removing duplicate : ", result)