let fruits = ["apple", "banana", "lemon"]

console.log(fruits)
console.log(fruits[2])

fruits[0] = "pear"
console.log(fruits)

fruits.push("apple")
console.log(fruits)

fruits.pop() //* removes last element
console.log(fruits) 

fruits.unshift("mango") //* adds element to first index
console.log(fruits)

fruits.shift() //* removes first element
console.log(fruits)

console.log(fruits.length)
console.log(fruits.indexOf("banana"))
console.log(fruits.indexOf("coconut")) // returns -1 (not found)
