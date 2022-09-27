const letters = new Set(["a", "b", "c"])
console.log(letters)

letters.add("d")
console.log(letters)

// adding an exact value overrides it
letters.add("d")
console.log(letters)

letters.forEach(function(value){
    console.log(value)
})

for (const x of letters.values()) {
    console.log(x)
}