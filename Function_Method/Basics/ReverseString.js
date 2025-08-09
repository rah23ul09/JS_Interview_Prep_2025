function reverse(str) {
    return str.split('').reverse().join('')
}

console.log(reverse("Rahul"))

const reverse_string = {
    reverse_str : function(str) {
        return str.split('').reverse().join('')
    }
}

console.log(reverse_string.reverse_str("Rahul"))