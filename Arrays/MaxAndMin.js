// using function 
const array = [2, 9, 6, -3, -1, 0, 5]
function findMaxMin(arr) {
    let max = arr[0]
    let min = arr[0]
    
    for(let i = 1; i <= arr.length; i++) {
        if(arr[i] > max) max = arr[i]
        if(arr[i] < min) min = arr[i]
    }
    console.log(max, " is the max value")
    console.log(min, " is the min value")
}

findMaxMin(array)

// using object

