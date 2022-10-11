//* Array of obejcts

class Car {
    constructor(model, year, color) {
        this.model = model
        this.year = year
        this.color = color
    }

    drive() {
        console.log(`You're driving the ${this.model}`)
    }
}

const car1 = new Car("BMW 1735", 2020, "white")
const car2 = new Car("Honda City", 2022, "gray")
const car3 = new Car("Ford Focus", 2019, "orange")
const car4 = new Car("Peugeot 308", 2019, "red")
const car5 = new Car("Chevy Tracker", 2019, "green")
const car6 = new Car("Mazda", 2017, "blue")

console.log(car1)

car3.drive()

const cars =[car1, car2, car3, car4, car5, car6]

console.log(cars)
console.log(cars[1])
console.log(cars[0].model)

cars[2].drive()

function driveAllCars(cars) {
    for (const car of cars) {
        car.drive()
    }
}

driveAllCars(cars)