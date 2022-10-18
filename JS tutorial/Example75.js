
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

