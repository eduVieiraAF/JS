/*
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result

A promise is a JavaScript object that links producing code and consuming code
*/

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = window.prompt("Enter a number")

    if (x >= 0) {
        myResolve("Positive")
    } else {
        myReject("Negative")
    }
}) 

myPromise.then(
    function(value) {myDisplayer(value)},
    function(error) {myDisplayer(error)}
)