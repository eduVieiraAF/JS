let a
let b
let c
let area
let s

document.getElementById("calArea").onclick = function() {
    a = document.getElementById("sideA").value
    b = document.getElementById("sideB").value
    c = document.getElementById("sideC").value

    a = Number(a)
    b = Number(b)
    c= Number(c)

    if (a != "" || b!= "" || c!= "") {
        s = (a + b +c) / 2 //* semi-perimeter
        area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
        console.log(`The area is ${area}`)
        window.alert(`The area is ${area}`)
    } else {
        window.alert(`Empty field`)
        document.getElementById("baseValue").innerHTML = ""
    }
}