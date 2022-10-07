
//* Filter 
/*      array.filter() creates a new array with all elements that pass a
        test provided by a function
*/

let ages = [18, 22, 31, 17, 14, 47, 90, 13]
let adults = ages.filter(checkAdults)
let minors = ages.filter(checkMinors)

console.log("Adults →")
adults.forEach(showAges)

console.log("Minors →")
minors.forEach(showAges)

function checkAdults(element) {
    return element >= 18
}

function checkMinors(element) {
    return element < 18
}

function showAges(element) {
    console.log(element)
}