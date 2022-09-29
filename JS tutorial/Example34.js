/* 
Proxies (proxy objects) are used to wrap an object and refine various operations into the object such as 
reading, insertion, validation, etc. Proxy allows you to add  custom behaviour to an object or a function.
*/

let student1 = {
    age: 40,
    name: "Edu"
}

const handler = {
    get: function(obj, prop) {
        return obj[prop] ? obj[prop] :  "property does not exist"
    }
}

const proxy = new Proxy(student1, handler)

console.log(proxy.name)
console.log(proxy.age)
console.log(proxy.class)

// setting new key/value
proxy.gender = "male"
console.log(proxy)

// You can use a proxy for validation. You can check the value of a key and perform an action based on that 
// value

let student2 = {
    name : "Scott",
    age : 45
}

const handler2 = {
    // get the object key and value
    get(obj, prop) {

        // check condition
        if (prop == 'name') {
            return obj[prop]
        } else {
            return "not allowed"
        }
    }
}

const proxy2 = new Proxy(student2, handler2)
console.log(proxy2.name)
console.log(proxy2.age)

// Read-only setup

let student3 = {
    name: "Sofia",
    age: 8
}

const handler3 = {
    set: function(obj, prop, value) {
        if (obj[prop]) {
            alert("This is read-only")
        }
    }
}

const proxy3 = new Proxy(student3, handler3)
proxy3.name = "John"

