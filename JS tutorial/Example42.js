let fruits = ["apple", "banana", "lemon", "cherry", "avocado", "peach", "kiwi"]

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

//* sorting an array
fruits = fruits.sort()

//* standart for loop
for (let i = 0; i < fruits.length; i += 1) {
    console.log(fruits[i])
}

//* backwards for loop
for (let j = fruits.length -1; j >= 0; j -=1 ) {
    console.log(fruits[j])
}

//* sorting an array from end to beginning
fruits = fruits.sort().reverse()

//* for of
for (let fruit of fruits) {
    console.log(fruit)
}

//* 2D arrays
let vegetables = ["carrots", "onions", "potatoes", "lettuce"]
let meats = ["chicken", "beef", "pork", "lamb"]

let food = [fruits.sort(), vegetables.sort(), meats.sort()]
console.log(food)


//* nested loops
for (item of food) {
    console.log(item)

    for (subItem of item) {
        console.log(subItem)
    }
}

//* Reducing an array to a single value
let prices = [5, 10, 15, 20, 25, 30]
let total = prices.reduce(checkOut)

console.log(`Total due → USD $${total}`)

function checkOut(total, element) {
    return total + element
}

//* Sorting an array of numbers

let grades = [100, 60, 90, 80, 40, 75, 40]

grades = grades.sort(ascendingOrder)
grades.forEach(showOrder)

grades = grades.sort(descendingOrder)
grades.forEach(showOrder)


function descendingOrder(x, y) {
    return y - x
}

function ascendingOrder(x, y) {
    return x - y
}

function showOrder(element) {
    console.log(element)
}

//* shuffling an array

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
console.log(cards)

shuffle(cards)
console.log(cards)
console.log(`Top cards → ${cards[0]}`)

function shuffle(array) {
    let currentIndex = array.length

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * array.length)
        currentIndex -= 1

        let temp = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temp
    }

    return array
}