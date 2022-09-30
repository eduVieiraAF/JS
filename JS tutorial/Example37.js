/*
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result

A promise is a JavaScript object that links producing code and consuming code
*/

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = -15

    if (x >= 0) {
        myResolve("OK")
    } else {
        myReject("Error")
    }
}) 

myPromise.then(
    function(value) {myDisplayer(value)},
    function(error) {myDisplayer(error)}
)