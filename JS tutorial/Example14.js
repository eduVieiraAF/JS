document.getElementById("btbRoll").onclick = function() {
    let x = Math.floor(Math.random() * 6) + 1
    let y = Math.floor(Math.random() * 6) + 1
    let z = Math.floor(Math.random() * 6) + 1
    
    console.log(x)
    console.log(y)
    console.log(z)
    
    document.getElementById("xLabel").innerHTML = x
    document.getElementById("yLabel").innerHTML = y
    document.getElementById("zLabel").innerHTML = z
}
