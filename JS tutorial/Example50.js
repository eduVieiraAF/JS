
//* Nested functions
/*
    Functions inside other functions.
    Inner functions are "hidden" from outside functions.
    Used in closures.
*/

let username = "Edu"
let inbox = 3

login()

function login() {
    displayUsername()
    displayInbox()

    function displayUsername() {
        console.log(`Welcome back, ${username}`)
    }
    
    function displayInbox() {
        console.log(`You have ${inbox} messages`)
    }
}

