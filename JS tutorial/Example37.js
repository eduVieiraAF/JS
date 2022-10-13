/*
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result

A promise is a JavaScript object that links producing code and consuming code
Promises encapsulate the result of an asynchronous operation so they let asynchronous methods
    return values like synchronous methods.

"I promise to return something in the future"

?   STATES : 'pending' → 'fulfilled' → 'rejected'
*/


//* Example #1
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

//* Example #2

//* Producing code
function logger(value) {
    console.log(value)
}

const promise = new Promise((resolve, reject) => {
    let fileLoaded = true
    
    if (fileLoaded) { resolve("File loaded") } 
    else { reject("File NOT found") }
})

//* consuming code
promise.then(
    (loaded) => {logger(loaded)},
    (error) => {logger(error)}
)
 /* 
 *  Alternatively
 promise.then(value => console.log(value)).catch(error => console.log(error)) 
 */

