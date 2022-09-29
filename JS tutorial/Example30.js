document.getElementById("myButton").onclick = function() {
    const visaBtn = document.getElementById("visaBtn")
    const masterBtn = document.getElementById("masterBtn")
    const cashBtn = document.getElementById("cashBtn")

    if (document.getElementById("myCheckBox").checked)  {
        window.alert("Subscription committed")
        
        if (visaBtn.checked) {
            console.log("Visa selected")
        } else if (masterBtn.checked) {
            console.log("Master Card selected")
        } else if (cashBtn.checked) {
            console.log("Cash selected")
        } else {
            console.log("no payment selected")
            window.alert("You will be billed later")
        }
    } else {
        window.alert("Subscription NOT committed")
    }
}