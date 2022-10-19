//* ES6 module
/*
    → it's a file of reusable code
    → we can import sections of pre-written code to use whenever we choose to
    → Great for any general utility values and functions
    → Helps to make code more reusable anda maintanable
    → modules are like separated chapters of a book
*/

// import {PI, getArea, getCircumference} from './math_util.js' no need for MathUtil.
import * as MathUtil from './math_util.js'

let area = MathUtil.getArea(4)
let circumference = MathUtil.getCircumference(10)

console.log(MathUtil.PI)
console.log(area)
console.log(circumference)
