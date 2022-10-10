//* A Class is like a blueprint for creating objects like most OOP languages

class Player {
    score = 0
    name = ""

    pause() { // don't necessarily need the 'function' keyword here
        console.log("game paused")
    }

    exit() {
        console.log("Good-bye")
    }
}

const player1 = new Player()
player1.name = "John"
console.log(`Current score for ${player1.name} → ${player1.score}`)

for (let i = player1.name.length;  i > 0; i -= 1) {
    player1.score += 1
}

console.log(`Current score for ${player1.name} → ${player1.score}`)

player1.pause()

if (player1.score >= 4) {
    player1.exit()
} else {console.log("try again")}

const player2 = new Player()
player2.name = "Johnatham"

console.log(`Current score for ${player2.name} → ${player2.score}`)

for (let i = player2.name.length;  i > 0; i -= 1) {
    player2.score += 1
}

console.log(`Current score for ${player2.name} → ${player2.score}`)

if (player1.score > player2.score) {
    console.log(`${player1.name} wins!`)
} else {
    console.log(`${player2.name} wins!`)

}