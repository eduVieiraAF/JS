const data = '{"name":"Edu", "age":40, "country":"Brazil"}'
const obj = JSON.parse(data)

console.log(obj)
console.log(`${obj.name} is ${obj.age}. ${obj.name} is from ${obj.country}`)

//* Array as JSON
const cars = '["Fords", "BMW", "Audi", "Fiat"]'
console.log(cars)
const carObj = JSON.parse(cars)
console.log(carObj)
console.log(carObj[2])

//* Exception - dates cannot be parsed so pass it as string
const person = '{"name":"John", "birth":"1986-12-14", "city":"New York"}'
console.log(person)
const personObj = JSON.parse(person)
console.log(personObj)
console.log(`${personObj.name} was born on ${personObj.birth} in ${personObj.city}`)

