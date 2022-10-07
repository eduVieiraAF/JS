
//* The rest parameter  '...'
/*
    represents an indefinite number of arguments
    (packs arguments into an array)
*/

let a = 1
let b = 2
let c = 3
let d = 4
let e = 5


console.log(sum(a, b, c))

/* could not accept more than 2 arguments this way
function sum(a, b) {
    return a + b
}
*/

function sum(...numbers) {
    let total = 0

    for (let number of numbers) {
        total += number
    }

    return total
}

