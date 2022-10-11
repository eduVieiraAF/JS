
//* STATIC
/*
    belongs to the class, not to the objects
    properties: useful for cache, fixed configurations
    methods: useful for utility functions
*/

    class Car {

        static numeberOfCars = 0
        constructor(model) {
            this.model = model
            Car.numeberOfCars += 1
        }

        static startRace() {
            console.log("3...2...1...GO!")
        }
    }

    const car1 = new Car("BMW")
    const car2 = new Car("Corvette")
    const car3 = new Car("Fiat")
    const car4 = new Car("Honda")

    console.log(Car.numeberOfCars)
    Car.startRace()


