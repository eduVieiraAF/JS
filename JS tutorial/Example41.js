document.getElementById("convertButton").onclick = function() {
    let temp

    if (document.getElementById("cButton").checked) {
        temp = document.getElementById("textBox").value
        
        if (isNaN(temp)) {
            alert("Enter a valid temperature")
        } else {
            temp = Number(temp)
            document.getElementById("temperature").innerHTML = `${Math.round(toCelsius(temp))}°C`
        }
    } else if (document.getElementById("fButton").checked) {
        temp = document.getElementById("textBox").value
        
        if (isNaN(temp)) {
            alert("Enter a valid temperature")
        } else {
            temp = Number(temp)
            document.getElementById("temperature").innerHTML = `${Math.round(toFahrenheit(temp))}°F`
        }
    } else {
        alert("Select a unit")
    }
}

function toCelsius(temp) {
    return (temp - 32 ) * (5 / 9)
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32
}