const cars = ["Volvo", "BMW", "Jaguar"]
console.log(cars)

let car1 = cars[0]
console.log(car1)

cars[2] = "Opel"
console.log(cars)

cars.sort()
console.log(cars)

let size = cars.length
for (let i = 0; i< size; i++) {
    console.log(cars[i])
}

cars.forEach(printLog)

function printLog(output){
    console.log(output)
}

cars.push("Ferrari")
console.log(cars)

cars[cars.length] = "GM"
console.log(cars)

console.log(cars.join(" * "))

cars.pop()
console.log(cars.join(" * "))

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
cars.shift()
console.log(cars)

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
cars.unshift("BMW")
console.log(cars)

const bikes = ["Harley-Davidson", "Honda", "Ducati", "Kawasaki"]
const vehicles = cars.concat(bikes)
console.log(vehicles.join(" | "))