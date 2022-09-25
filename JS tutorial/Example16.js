// creating object
const person = {
    name: 'Edu',
    greet: function() {
        console.log(`Hello, ${person.name}`)
    }
}

console.log(person)
person.greet()
console.log(person.name)

// creating object
let student = { }

// adding a property
student.name = "Eduardo"

// adding a property
student.greet = function() {
    console.log(`Hello ${student.name}`)
}

console.log(student)
console.log(student.name)
student.greet()

//* The 'this' keyword

const employee = {
    name: "Kevin",
    age: 22,
    position: "System analyst",

    greet: function() {
        console.log(`
    Name: ${this.name}\n
    age:  ${this.age}\n
    Job:  ${this.position}`)
    }
}

console.log(employee)
console.log(employee.name, employee.age)
employee.greet()