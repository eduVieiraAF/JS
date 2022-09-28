// Storing data
const myObj = {name: "Edu", age: "40", home: "Guarulhos"}
const myJSON = JSON.stringify(myObj)
localStorage.setItem("myData", myJSON)

// Fetching data
let text = localStorage.getItem("myData")
let obj = JSON.parse(text)
document.getElementById("storeData").innerHTML = `${obj.name}, ${obj.home}`
console.log(text)
console.log(obj)
console.log(obj.age)