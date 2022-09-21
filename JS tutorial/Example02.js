//* Declaration var, let, const

let fullName = "Eduardo Vieira"
let age = 40
let employed = true
let employmentStatus;

console.log("Legal name:", fullName)
console.log("Age:", age)
console.log("got a job? ", employed)

if (employed) {
    employmentStatus = "Active"
} else {
    employmentStatus = "none"
}

document.getElementById("p1").innerHTML = "Hello, " + fullName + "!"
document.getElementById("p2").innerHTML = "You are " + age + " years old."
document.getElementById("p3").innerHTML = "Employment status: " + employmentStatus
