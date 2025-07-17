let fib = 11
let a = 0
let b = 1
let line = " "

for(let i = 0; i <= fib; i++) {
    line += a + " "
    let next = a + b
    a = b
    b = next
}
console.log(line)