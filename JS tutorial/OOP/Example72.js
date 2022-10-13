//* The date object is used to work with dates and times

let date = new Date()
// let date = new Date(0,1,2,3,4,5) // output → 02/02/1900 03:04:05
// let date = new Date("February, 20, 1982 18:45:00")

let year = date.getFullYear()
let day = date.getDate()
let month = date.getMonth()
let hours = date.getHours()
let ampm = hours >= 12 ? "pm" : "am"

hours = (hours % 12) || 12 // convertion from military time

date.setFullYear(2026)

date = date.toLocaleString()


console.log(`Full date → ${date}\nDetailed date → ${day}/${month}/${year} | ${hours}`)
console.log(ampm)
document.getElementById("dateTime").innerHTML =  `Full date → ${date} <br> Detailed date → ${day}/${month}/${year}`


function formatDate(date) {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()

    return `${day}/${month}/${year}`
}

let newDate = new Date()

console.log(newDate)
document.getElementById("funTime").innerHTML = formatDate(newDate)