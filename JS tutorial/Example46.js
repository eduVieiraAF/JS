
//* array.forEach() execcutes a provided callback function once for each array element

let students = ["josh", "john", "irwin", "nancy", "sarah", "bridget"]
students.forEach(allCaps)
students.forEach(print)

function allCaps(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1)
}

function print(student) {
    console.log(student)
}