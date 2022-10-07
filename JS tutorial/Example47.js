
//* array.map() executed a provided callback function once for each array element
//*     AND creates a new array

let numbers = [1, 2, 3, 4, 5]
let squares = numbers.map(square)
squares.forEach(show)
let cubes = numbers.map(cube)
cubes.forEach(show)

function square(element) {
    return Math.pow(element, 2)
}

function cube(element) {
    return Math.pow(element, 3)
}

function show(output) {
    console.log(output)
}
