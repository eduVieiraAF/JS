let a
let b
let c 

document.getElementById("button").onclick = function() {
    a = document.getElementById("sideA").value
    a = Number(a)

    b = document.getElementById("sideB").value
    b = Number(b)

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    console.log(`Side C → ${c}`)
    document.getElementById("sideC").innerHTML = `Side C → ${c}.`
}
