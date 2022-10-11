//* Get
// binds an object property to a function when that property is accessed

//* Set
// binds an object property to a function when that property is assigned a value

class Car {
    constructor(power) {
        this._gas = 40
        this._power = power // protected property (read-only)
    }

    get power() {
        return `${this._power}hp`
    }

    get gas() {
        return `${this._gas}L (${this._gas / 50 * 100}% → tank level)`
    }

    set gas(value) { // allows you to set values
        if (value > 50) {
            value = 50
        } else if (value < 0) {
            value = 0
        }

        this._gas = value // this is writable
    }
}

let car = new Car(180)
car.gas = 25
console.log(car.power)
console.log(car.gas)
