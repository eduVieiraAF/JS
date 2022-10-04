const answer = Math.floor(Math.random() * 10 +1)
let guesses = 0

document.getElementById("submitButton").onclick = function() {
    let guess = document.getElementById("guessField").value
    guesses += 1

    if (guess == 0 || guess > 10) {
        alert("NOT A VALID NUMBER")
    } else {
        if (guess == answer) {
            alert(`${guess} IS CORRECT!!! It took you ${guesses} guesses.`)
        } else if (guess < answer) {
            alert(`${guess} is too small.`)
        } else {
            alert(`${guess} is too large.`)
        }
    }
}