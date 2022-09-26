//* Constructor function

function Person(person_name, person_age, person_jb) {
    this.name = person_name,
    this.age = person_age,
    this.job = person_jb

    //* adding a method
    this.greet = function() {
        console.log(`Hello, ${this.name}`)
    }
}

// creating an object

const person1 = new Person("Edu", 40, "System Analyst")
const person2 = new Person("Kevin", 24, "Clerk")

console.log(person1)
console.log(person2)
console.log(person1.age, person1.name)
console.log(person2.name, person2.job)

person1.greet()
person2.greet()


//* adding another method

person2.greet2 = function() { 
    console.log(`hi ${this.name}`)
}

person2.greet2()

//* Adding new property using 'prototype'

Person.prototype.gender = ""

person1.gender = "Male"
console.log(person1.name, person1.gender)

//* Built-in constructors

let a = new Object();    // A new Object object
let b = new String();    // A new String object
let c = new Number();    // A new Number object
let d = new Boolean();   // A new Boolean object

const name = new String("Edu")

console.log(name)