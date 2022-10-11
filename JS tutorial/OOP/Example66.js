//* Objects as arguements in function

class Car {
    constructor(model, year, color) {
        this.model = model
        this.year = year
        this.color = color
    }
}

const car1 = new Car("BMW 1735", 2020, "white")
const car2 = new Car("Honda City", 2022, "gray")
const car3 = new Car("Ford Focus", 2019, "orange")

displayInfo(car1)
displayInfo(car2)
displayInfo(car3)

function displayInfo(car) {
    console.log(`This is a(n) ${car.year} ${car.color} ${car.model}`)
}

function changeColor(car, color) {
    car.color = color
}

changeColor(car3, "blue")
displayInfo(car3)
