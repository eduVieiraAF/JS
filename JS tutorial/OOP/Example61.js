
//* CONSTRUCTORS

class Student {
    constructor(name, age, gpa) {
        this.name = name
        this.age = age
        this.gpa = gpa
    }

    study() {
        console.log(`${this.name}'s studying`)
    }
}

const student1 = new Student("Edu", 40, 3.3)
console.log(student1)
console.log(student1.name)

const student2 = new Student("Martha", 26, 3.1)
console.log(student2)
console.log(student2.name)

const student3 = new Student("Lincoln", 30, 3.5)
console.log(student3)
console.log(student3.name)

student2.study()
student1.study()