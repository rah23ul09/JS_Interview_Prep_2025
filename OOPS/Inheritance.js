class Animal{
    speak(){
        console.log("Animal makes different sound")
    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog barks")
    }
}

const a = new Animal()
a.speak()

const d = new Dog()
d.speak()