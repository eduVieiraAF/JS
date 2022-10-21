console.dir(window)

console.log(window.innerWidth)
console.log(window.outerHeight)

console.log(window.scrollX)
console.log(window.scrollY)

console.log(window.location.href)
console.log(window.location.hostname)
console.log(window.location.pathname)

const myButton = document.querySelector("#myButton")

//myButton.addEventListener("click", () => window.open('https://github.com/eduVieiraAF'))
//myButton.addEventListener("click", () => window.close())
myButton.addEventListener("click", () => window.print())


window.confirm("Click OK")
let input = window.prompt("type something")
window.alert(input)