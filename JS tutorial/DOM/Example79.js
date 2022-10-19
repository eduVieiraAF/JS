//* Traversal - elements are arranged in a family tree


// → .firstElementChild
// → .lastElementChild
// → .parentElement
// → .nextElementSibling
// → .previousEelementSibling
// → .children[]
// → Array.from(.children)

let element = document.body
let firstChild = element.firstElementChild
firstChild.style.backgroundColor = "lightgreen"

let lastChild = element.lastElementChild // here it will be the <script>
console.log(lastChild)

let element2 = document.querySelector("#vegetables")
let parent = element2.parentElement // entire document body
parent.style.fontFamily = "monospace"
parent.style.fontSize = "16pt"

let nextsibling = element2.nextElementSibling // list of dessert
nextsibling.style.backgroundColor = "powderblue"
nextsibling.style.color = "brown"

let firstItem = element2.firstElementChild
firstItem.style.backgroundColor = "#f93ea4"

let lastItem = element2.lastElementChild
lastItem.style.backgroundColor = "#fbee74"

let indexedChild = element2.children[1]
indexedChild.style.backgroundColor = "#fb8e8d"

let arrayChildren = Array.from(element2.children)
arrayChildren.forEach(child => {
    child.style.color = "#3d3d3e"
})

