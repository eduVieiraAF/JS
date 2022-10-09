
//* Objects = a group of properties(what an object has) and methods (behaviour of an object)

const car1 = { //creating an object
    model: "Mustang",
    color: "blue",              // properties
    year: 2022,

    drive: function() {         // behaviour
        console.log("you're driving the car.")
    },

    break: function() {
        console.log("You're stopping the car.")
    }
}

const car2 = { 
    model: "Corvette",
    color: "white",              
    year: 2020,

    drive: function() {         
        console.log("you're driving the car.")
    },

    break: function() {
        console.log("You're stopping the car.")
    }
}

console.log(car1.model)
console.log(car1.year)
car1.drive()

console.log(car2.model)
console.log(car2.color)
car2.break()