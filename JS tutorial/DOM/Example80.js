
//* adding or changing HTML elements

const title = document.createElement("h1")
//title.innerHTML = window.prompt("Enter your name") not safe
title.textContent = window.prompt("Enter your name")
title.style.fontFamily = "monospace"
document.body.append(title)

const myList = document.querySelector("#fruits")
const listItem = document.createElement("li")
const listItem2 = document.createElement("li")
const listItem3 = document.createElement("li")

listItem.textContent = "strawberries"
myList.append(listItem)
listItem2.textContent = "blueberries"
myList.prepend(listItem2) // adds to the top of the list
listItem3.textContent = "oranges"
myList.insertBefore(listItem3, myList.getElementsByTagName("li")[2])


