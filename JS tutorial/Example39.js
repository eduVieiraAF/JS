
// * Function borrowing

/*
With the bind() method, an object can borrow a method from another object.
The example below creates 2 objects (person and member).
The member object borrows the fullname method from the person oject
*/

const person = {
    firstName: "Edu",
    lastName: "Vieira",
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}

const member = {
    firstName: "Hugh",
    lastName: "Nelson",
}

let fullName = person.fullName.bind(member)

document.getElementById("demo").innerHTML = fullName()