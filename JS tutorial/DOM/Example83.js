//* EVENT LISTENERS
/*
    → can add multiple events 
    → same event can invoke different functions
*/

const InnerDiv = document.getElementById("innerDiv")
const outerDiv = document.getElementById("outerDiv")

InnerDiv.addEventListener("mouseover", changeColor)
InnerDiv.addEventListener("mouseout", changeBack)
InnerDiv.addEventListener("click", paintBlue)
outerDiv.addEventListener("click", paintBlue, true) // handles outer first when 2 elements takes up 
                                                        // same element

function changeColor() {
    InnerDiv.style.backgroundColor = "lightgreen"
}

function changeBack() {
    InnerDiv.style.backgroundColor = "coral"
}

function paintBlue() {
    alert(`You selected ${this.id}`)
    this.style.backgroundColor = "cornflowerblue"
}