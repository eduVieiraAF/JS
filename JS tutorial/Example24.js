// * BEFORE ARROW FUNCTION
hello = function() {
    console.log("Hello, World")
}

// * AFTER
hi = () => {
    console.log("Hello, World")
}

hello()
hi()

// * Arrow with brackets
greet = (value) => {
    console.log(`Hello, ${value}`)
}

// * Arrow without brackets
greet2 = value => console.log(`Hello, ${value}`)

greet("Edu")
greet2("Eduardo")

//* more examples

percent = (x, y) => x / y * 100

console.log(`Approx ${Math.floor(percent(20, 300))}%`)