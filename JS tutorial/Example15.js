let username = "    eduVieiraAF "
let mblNum = "11-9-7398-3112"
let usernameSliced1 = username.trim().slice(3)
let usernameSliced2 = username.trim().slice(0, 3)
let usernameSliced3 = username.slice(username.indexOf("u") + 1)
let usernameSliced4 = username.slice(4, username.indexOf("u") + 1)

console.log(username)
console.log(username.length, mblNum.length)
console.log(username.charAt(4))
console.log(username.indexOf("e"))
console.log(username.lastIndexOf("e"))
console.log(username.trim())
console.log(username.toUpperCase().trim())
console.log(username.toLocaleLowerCase().trim())
console.log(mblNum.replaceAll("-", "."))
console.log(usernameSliced1)
console.log(usernameSliced2)
console.log(usernameSliced3)
console.log(usernameSliced4)