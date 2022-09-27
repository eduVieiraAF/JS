function myFunction() {
    const message = document.getElementById("p1")
    message.innerHTML = ""
    let x = document.getElementById("numInput").value

    try {
        if (x == "") throw "empty"
        if (isNaN(x)) throw "Not a number"
        
        x = Number(x)
        if (x == 25) throw "right in the middle"
        if (x < 25) throw "too low"
        if (x > 25) throw "too high"
    } catch(err) {
        message.innerHTML = "Input is " + err
    }
}