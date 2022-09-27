const fruits = new Map([
    ["apples", 210],
    ["mangos", 150],
    ["oranges", 540]
])

document.getElementById("demo").innerHTML = fruits.get("apples") + "<br>" + 
fruits.size + "<br>" + fruits.has("oranges")

fruits.set("bananas", 340)
console.log(fruits.get("bananas")) // true
fruits.delete("apples")
console.log(fruits.has("apples")) // false

let text = ""
fruits.forEach(function(value, key){
    text += key + ' = ' + value + "<br>"
})

document.getElementById("demo2").innerHTML = text

for (let x of fruits.entries()) {
    console.log(x)
}