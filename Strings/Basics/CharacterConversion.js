let str = "RahUl sInGH"
result = ""

for(let ch of str) {
    if(ch >= 'a' && ch <= 'z') result += ch.toUpperCase()
    else if(ch >= 'A' && ch <= 'Z') result += ch.toLowerCase()
    else result += ch
}

console.log("Converted string : ", result)