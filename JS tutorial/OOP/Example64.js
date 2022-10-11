//* super
// comonly used to invoke constructors from a parent class

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed) {
        super(name, age)
        this.runSpeed = runSpeed
    }
    
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age)
        this.swimSpeed = swimSpeed
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed) {
        super(name, age)
        this.flySpeed = flySpeed
    }
}

const rabbit = new Rabbit("rabbit", 4, 15)
const fish = new Fish("fish", 19, 8)
const hawk = new Hawk("hawk", 21, 106)

console.log(fish)
console.log(rabbit)
console.log(hawk)