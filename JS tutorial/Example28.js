
//* The spread operator ... is used to expand or spread an iterable or an array. 
const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   
console.log(...arrValue); 

//* You can also use the spread syntax ... to copy the items into a single array.
const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];

console.log(arr2);

//* copying using spread syntax
const arr3 = [...arr2]

console.log(arr3)

//* Spread Operator with Object
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2};

console.log(obj3);

//* Rest Parameter
/* 
    When the spread operator is used as a parameter, it is known as the rest parameter.
    You can also accept multiple arguments in a function call using the rest parameter.
*/

let func = function(...args) {
    console.log(args)
}

func("JavaScript", 5, true)
