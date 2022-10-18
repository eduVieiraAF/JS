
//* Closure
/*
    → provides access to the outer scope of a function from inside the inner function, even after 
    the outer function has closed.
*/

//? Example #1

// outer function
function greet() {
    // variable defined outside the inner function
    let name = "Edu"

    // inner function
    function displayName() {
        // accessing the 'name' variable
        return "hi, " + name
    }

    return displayName
}

const g1 = greet()
console.log(g1) // returns the function definition
console.log(g1()) // returns the value

//? Example #2

function calculate(x) {
    function multiply(y){
        return x * y
    }

    return multiply
}

const m3 = calculate(3)
const m4 = calculate(4)

console.log(m3) // returns the definition of the function
console.log(m3()) // NaN

console.log(m3(6))
console.log(m4(8))

//* Data privacy
//  → helps in the data privacy of the program

let a = 0
function sum() {
    function increaseSum() {
        // the value of a is increased by 1
        return a = a + 1
    }

    return increaseSum
}

const x = sum()
console.log(x)
console.log(x())
console.log(x())
console.log(x())
console.log(x())
console.log(x())

console.log(`Updated value for a → ${a}`)
a = a + 1
console.log(a)

