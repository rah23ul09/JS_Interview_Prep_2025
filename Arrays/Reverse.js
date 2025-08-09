// Using function

const array = [1, 4, 0, 5, 9, 8]

function reverseArray(arr) {
    let start = 0, end = arr.length-1
    while(start < end) {
        let temp = arr[start]
        arr[start] =arr[end]
        arr[end] = temp
        start++
        end--
    }
}
reverseArray(array)
console.log(array)


// Using object
const array1 = [2, 9, 7, 5, 1, 0 ,4]
const arrReve = {
    reverseArr : function(arr) {
        let start = 0, end = arr.length-1
        while(start < end) {
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start ++
            end --
        }
    }
}

arrReve.reverseArr(array1)
console.log(array1)

// Using class
class ReverseArray{
    static revArr(arr){
        let start = 0, end = arr.length-1
        while(start < end) {
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start ++
            end --
        }
    }
}

array2 = [1, 4, 5, 2, 0, 7, 9]
ReverseArray.revArr(array2)
console.log(array2)