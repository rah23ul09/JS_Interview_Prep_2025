let str = "Hey Rahul, How are you buddy?"
let count = 0
let isWord = false

for(let i = 0; i <= str.length; i ++){
    let ch = str.charAt(i)
    if(ch != ' ' && ch != '\n' && ch != '\t') {
        if(!isWord) {
            count++
            isWord = true
        }
    }
    else{
        isWord = false
    }
}

console.log(`Word count is : ${count}`)