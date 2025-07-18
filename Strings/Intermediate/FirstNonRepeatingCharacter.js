let str = "aabbsdncec"
let found = false

for(let ch of str){
    if(str.indexOf(ch) === str.lastIndexOf(ch)){
        console.log(`First non-repeating character found is : ${ch}`)
        found = true;
        break
    }
}

if(!found) console.log("No non-repeating character found")