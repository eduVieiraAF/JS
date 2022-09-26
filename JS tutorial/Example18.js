const student = {
    // data property
    firstName: "Liz",

    // accessor property(getter)
    get getName() {
        return this.firstName
    },

    // accessor property(setter)
    set changeName(newName) {
        this.firstName = newName    
    }
}

// accessing data property
console.log(student.firstName)

// accessing getter property 
console.log(student.getName)

// can't access get as a method
// console.log(student.getName())

// accessing setter property
student.changeName = "Martha"
console.log(student.firstName)

console.log("----------------------------------")

const employee = {
    firstName: "Norman"
}

// getter using defineProperty
Object.defineProperty(employee, "getName", {
    get: function() {
        return this.firstName
    }
})

// setter using defineProperty
Object.defineProperty(employee, "changeName", {
    set: function(value) {
        this.firstName = value
    }
})

console.log(employee.firstName)
employee.changeName = "Bill"
console.log(employee.firstName)