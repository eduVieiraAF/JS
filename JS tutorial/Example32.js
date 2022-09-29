/* 
Ternary operator:
    1- a condition with ?
    2- expression if true :
    3- expression if false

    => condition ? exprIfTrue : exprIfFalse
*/

let adult = checkAge(21)
console.log(adult)

function checkAge(age) {
    return age >= 18 ? true : false
}

let win = false
checkWinner(win)

function checkWinner(win) {
    win ? console.log("YOU WIN!!!") : console.log("YOU LOSE!!")
}