let row = 5

for(let i = row; i >= 1; i--) {
    let line = " "
    for(let j = 1; j <= i; j++) {
        line += j + " "
    }
    console.log(line)
}