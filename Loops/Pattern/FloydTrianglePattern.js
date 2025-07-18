let row = 5
let number = 1

for(let i = 1; i <= row; i++){
    line = " "
    for(let j = 1; j <= i; j++) {
        line += number + " "
        number++;
    }
    console.log(line)
}