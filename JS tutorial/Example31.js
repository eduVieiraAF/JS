let username = "";

while (username == "" || username == null) {
    username = window.prompt("Enter your name")
}

console.log(`Hello, ${username}`)

/*
do {
    username = window.prompt("Enter your name")
} while (username == "")

console.log(`Hello, ${username}`)
*/