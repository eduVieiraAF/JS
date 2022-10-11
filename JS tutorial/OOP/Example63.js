//* Inheritance
//   A child class can inherit all method and properties from a parent class

class Animal {
    alive = true
    
    eat() {
        console.log(`This ${this.name} is eating`)
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
}


class Rabbit extends Animal {
    name ="rabbit"

    run() {
        console.log(`This ${this.name} is running`)
    }
}

class Fish extends Animal {
    name ="fish"

    swim() {
        console.log(`This ${this.name} is swimming`)
    }
}

class Hawk extends Animal {
    name ="hawk"

    fly() {
        console.log(`This ${this.name} is flying`)
    }
}

const rabbit = new Rabbit()
rabbit.eat()
rabbit.sleep()
rabbit.run()

const fish = new Fish()
fish.eat()
fish.sleep()
fish.swim()

const hawk = new Hawk()
hawk.eat()
hawk.sleep()
hawk.fly()
console.log(hawk.alive)