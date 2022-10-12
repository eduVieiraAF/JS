//* setInterval()
//  → invokes a function repeatedly after a number of millisenconds
//  → asynchronous function (doesn't pause execution)

let count = 0
let max = window.prompt("Count up to what number?")
max = Number(max)

const timer = setInterval(countUp, 1000)

function countUp() {
    count += 1
    console.log(count)

    if (count >= max) {
        clearInterval(timer)
        console.log("That's it")
    }
}