//* Storage

/*
window.localStorage     Allows to save key/value pair in a web browser. Stores the data with no expiration date
window.sessionStorage   Allows to save key/value pair in a web browser. Stores the data for one session.
*/

sessionStorage.setItem("Name", "Edu Vieira")
//* Updates value
//sessionStorage.setItem("Name", "Camila Sakihara")
console.log(sessionStorage.getItem("Name"))
console.log(sessionStorage)
console.log(localStorage)

let x = sessionStorage.key(1)
console.log(x)

let len = sessionStorage.length
console.log(`sessionStorage length → ${len}`)

localStorage.setItem("name", "Sofia Y S Vieira")
let daughter = localStorage.getItem("name")
console.log(daughter)
console.log(`localStorage length → ${localStorage.length}`)