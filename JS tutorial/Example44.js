
//* Spread operator ...
/*
    allows an iterable such as an array or a string to be
    expanded in places where ZERO or more elements are 
    expected (unpacks the elements)
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]
let username = "Edu Vieira"
console.log(...numbers)
console.log(...username)

//! let maximum = Math.max(numbers) returns 'NaN' without the spread operator
let maximum = Math.max(...numbers)
console.log(maximum)

let class1 = ["John", "Sarah", "David"]
let class2 = ["Andria", "Craig", "William"]

class1.push(class2) //! will not 'join' the array. Add the class2 array as an element
console.log(class1)

class1.pop()

class1.push(...class2) //* joins the arrays
console.log(class1)