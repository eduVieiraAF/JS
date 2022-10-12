
let item = "JS Course"
let price = 500

let timer1 = setTimeout(firstMessage, 2000, item, price)
let timer2 = setTimeout(secondMessage, 10000)
let timer3 = setTimeout(thirdMessage, 16000)

function firstMessage(item, price) {
    alert(`Buy this ${item} for ${price} USD`)
}

function secondMessage() {
    alert("Discount available only for today!")
}

function thirdMessage() {
    alert(`You've missed it`)
    document.getElementById("btn_alert").disabled = true
}

document.getElementById("btn_alert").onclick = function() {
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
    console.log("You've cancelled some messages")
}
