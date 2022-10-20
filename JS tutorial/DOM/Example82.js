const eBody = document.body
eBody.onload = () => { alert("Welcome") } // can directly  call it from HTML as well

const texty = document.getElementById("myText")
texty.onchange = () => { alert("Something's moved") }

function clickIt() {
    alert("Clicked")
}

const divElement = document.getElementById("myDiv")
divElement.onmouseover = () => { 
    divElement.style.backgroundColor = "brown" 
}

divElement.onmouseout = () => {
    divElement.style.backgroundColor = "cadetblue" 
}

divElement.onmousedown = () => {
    // similar to onclick 
}

divElement.onmouseup = () => {
    alert("You let up")
}