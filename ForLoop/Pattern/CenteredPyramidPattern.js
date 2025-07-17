let row = 7

for(let i = 1; i <= row; i++){
    let spaces = " ".repeat(row - i)
    let stars = "* ".repeat(i)
    console.log(spaces + stars)
}