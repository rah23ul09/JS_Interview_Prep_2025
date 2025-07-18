/* This wrapping of data which cannot be accessed by outside world is called data encapsulation */

class Encapsulation {
    // below data cannot be access by outside world
    // we "#" to set variable as private
    constructor() {
    let name = "";
    let marks = 0;

    // Public methods defined inside constructor so they can access private variables
        this.setName = function(newName) {
            name = newName
        }

        this.setMarks = function(newMarks) {
            marks = newMarks
        }

        this.getName = function() {
            return name
        }

        this.getMarks = function() {
            return marks
        }

    }
}

// creating object of class
const student = new Encapsulation()
student.setName("Rahul")
student.setMarks(73)

console.log(`${student.getName()} got ${student.getMarks()} marks`)