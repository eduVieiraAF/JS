
//* THIS 
//      references to a particular object which depends on the immediate context

const car1 = { //creating an object
    model: "Mustang",
    color: "blue",              // properties
    year: 2022,

    drive: function() {         // behaviour
        console.log(`you're driving the ${this.model}.`)
    },

    break: function() {
        console.log(`You're stopping the ${this.model}.`)
    }
}

const car2 = { 
    model: "Corvette",
    color: "white",              
    year: 2020,

    drive: function() {         
        console.log(`you're driving the ${this.model}.`)
    },

    break: function() {
        console.log(`You're stopping the ${this.model}.`)
    }
}

car1.drive()
car2.break()

console.log(this) // we're within the context of a window object

this.name = "My window"
console.log(this.name)
