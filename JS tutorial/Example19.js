//* In JavaScript, every function and object has a property named prototype by default.

function Person() {
    this.name = "Edu",
    this.age = 40
}

const person1 = new Person()
const person2 = new Person()

// adding property to constructor function
Person.prototype.gender = "male"


// checking prototype 
console.log(Person.prototype)

console.log(person1.gender)
console.log(person2.gender)

Person.prototype.meet = function() {
    console.log(`hello, ${this.name}. You're ${this.age} y.o. and you're a ${this.gender}`)
}

person1.meet()

// accessing prototype property
console.log(person1.__proto__);

//  ? The code above is merely an example. The proper code is below.

/*

class Person {
    constructor() {
        this.name = "Edu",
            this.age = 40
    }
    meet() {
        console.log(`hello, ${this.name}. You're ${this.age} y.o. and you're a ${this.gender}`)
    }
}

const person1 = new Person()
const person2 = new Person()

// adding property to constructor function
Person.prototype.gender = "male"


// checking prototype 
console.log(Person.prototype)

console.log(person1.gender)
console.log(person2.gender)


person1.meet() */