//* JSON Data
// "firstName":"John"

//* JSON Object
// {"firstName":"John", "lastName":"Johnson"}

//* JSON Array
let textArr = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}'

const jObj = JSON.parse(textArr)
document.getElementById("jsonData").innerHTML = `${jObj.employees[1].lastName}, ${jObj.employees[1].firstName}`
console.log(jObj)

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