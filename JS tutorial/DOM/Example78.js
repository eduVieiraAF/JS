
//* Element selectors

let h1 = document.getElementById("myTitle")

h1.style.backgroundColor = "#56c9af"
h1.style.width = "390px"
h1.style.textAlign = "center"
h1.style.borderRadius = "25px"

let beers = document.getElementsByName("beers")
console.log(beers)

beers.forEach(beer => {
    if (beer.checked){ console.log(beer.value) }
})

let foods = document.getElementsByTagName("li")
console.log(foods)
console.log(foods[2].textContent)
foods[0].style.fontFamily = "monospace"
foods[1].style.backgroundColor = "#56c9af"

let burgers = document.getElementsByClassName("burgers")
console.log(burgers)
for (let burger of burgers) {
    console.log(burger.textContent)
    burger.style.backgroundColor = "powderblue"
}

let element1 = document.querySelector("#myTitle") // preceed ID with # and only selects first item
element1.style.fontFamily = "monospace"

let element2 = document.querySelector(".burgers") // preceed class with . and only selects first item
element2.style.backgroundColor = "#56c9af"
element2.style.fontFamily = "monospace"

let element3 = document.querySelector("li")
element3.style.backgroundColor = "#56c9af"

let element4 = document.querySelector("[for]") // and only selects first item with this attribute
element4.style.backgroundColor = "#56c9af"

let element5 = document.querySelectorAll("li")
element5.forEach(element => {
    element.style.color = "brown"
    console.log(element.textContent)
})