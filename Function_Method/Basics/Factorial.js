/*
    1. Using Function
    2. Using Class
*/

function factorial(fact) {
    let result = 1
    for(let i = 2; i <= fact; i++) {
        result *= i
    }
    return result
}

console.log("Factorial is : ", factorial(5))

const Factorial = {
    // creating function inside JS object is methode
    factorial : function(fact) {
        let result = 1
        for(let i = 2; i <= fact; i++) {
            result *= 1
        }
        return result
    }
}

console.log("Factorial is : ", Factorial.factorial(5))