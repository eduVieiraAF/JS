

const myBox = document.getElementById("myBox")
window.addEventListener("keydown", moveBox)
let x = 0
let y = 0

function moveBox(event) {
    switch(event.key) {
        case "ArrowDown":
            y+=7
            myBox.style.top = y + "px"
            break
         
        case "ArrowUp":
            y-=7
            myBox.style.top = y + "px"
            break
        
        case "ArrowLeft":
            x-=7
            myBox.style.left = x + "px"
            break
        
         case "ArrowRight":
            x+=7
            myBox.style.left = x + "px"
            break
        
        default:
            break
    }
}
