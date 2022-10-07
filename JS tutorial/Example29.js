//* Simple example before Async

/*
    A callback is a function that is passed as an argument to another function

    → it ensures that a function is not going to run before a task is completed.
    → it helps to develop asynchronous (when a function has to wait for another function) code
        that helps us avoid errors and potential problems, such as waiting for a file to load.
        
*/

function myDisplay(something) {
    document.getElementById("demo").innerHTML = something
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2
    myCallback(sum)
}

myCalculator(5, 15, myDisplay)


sum(7, 5, dispalayConsole)
sum(23, 12, displayDOM)

function sum(x, y, aCallback) {
    let result = x + y

    aCallback(result)
}

function dispalayConsole(output) {
    console.log(output)
}

function displayDOM(output) {
    document.getElementById("total").innerHTML = output
}