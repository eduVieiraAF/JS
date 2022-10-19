//* DOM → Document Object Model (API)
//  → an interface for changing the content of a page

// console.dir(document) properties
console.log(document.title)
console.log(document.URL)

document.title = "Title of DOM changed"
console.log(document.title)
//document.location = "https://demo.bizify.com.br/home"
document.body.style.backgroundColor = "skyblue"
document.getElementById("myDiv").style.fontFamily="monospace"
document.getElementById("myDiv").innerHTML = "Coding"