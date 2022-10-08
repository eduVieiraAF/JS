

const store = new Map([
    ["t-shirt", 20],
    ["skirt", 15],
    ["pants", 29],
    ["socks", 7],
    ["shorts", 14],
    ["jeans", 30],
])

store.set("hat", 23)
store.delete("socks")

console.log(store)

let shoppingCart = 0

store.forEach((value, key) => console.log(`This ${key} is $${value}`))
console.log(store.size)

shoppingCart += store.get("jeans")
console.log(store.has("skirt"))
console.log(`Your total amount is $${shoppingCart}`)
 