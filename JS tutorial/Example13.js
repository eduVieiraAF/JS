/* 
for (initialExpression; condition; updateExpression) {
    code block
}
*/

const n = prompt("Enter a number");

for (let i = 1; i<= n; i++) {
    console.log(`hello, World: ${i}`)
}

console.log("\n-----------------------------------------")

/*
while (condition) {
    code block
}
*/

let start = 1, x = prompt("Enter a number");

while (start <= x) {
    console.log(`hello, World: ${start}`)
    start += 1
}

console.log("\n-----------------------------------------")

function factorial(x) {
    if (x ===0) {
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

let num = prompt("Enter a number")

if (num > 0) {
    let result = factorial(num)
    console.log(`The factorial of ${num} is ${result}.`)
} else {
    console.log("Nope")
}