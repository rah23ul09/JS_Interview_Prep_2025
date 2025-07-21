
// Using function
function isPrime(prime){
    if(prime <= 1) return false
    else {
        for(let i = 2; i <= Math.sqrt(prime); i++) {
            if(prime % i === 0) return false
        }
    }
    return true
}

console.log(isPrime(29) ? "Number is prime" : "Number is not prime")

// Using object
const primeCheck = {
    primeNo : function(prime) {
        if(prime <= 1) return false
        else {
            for(let i = 2; i <= Math.sqrt(prime); i++) {
                if(prime % i === 0) return false
            }
        }
        return true
    }
}

console.log(primeCheck.primeNo(21) ? "Number is prime" : "Number is not prime")

// Using class
class PrimeOrNot{
    static primeorNot(prime) {
        if(prime <= 1) return false
        else{
            for(let i = 2; i <= Math.sqrt(prime); i++) {
                if(prime % i == 0) return false
            }
        }
        return true
    }
}

console.log(PrimeOrNot.primeorNot(32) ? "Numbe is prime" : "Number is not prime")