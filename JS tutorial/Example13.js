/* 
for (initialExpression; condition; updateExpression) {
    code block
}
*/

const n = prompt("Enter a number");

for (let i = 1; i<= n; i++) {
    console.log(`hello, World: ${i}`)
}

console.log("-----------------------------------------")

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