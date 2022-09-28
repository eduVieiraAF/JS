function myDisplay(something) {
    document.getElementById("demo").innerHTML = something
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2
    myCallback(sum)
}

myCalculator(5, 15, myDisplay)

//* Simple example before Async