/* 
? toLocaleString() = returns a string with a language sensitive representation of this

* => number.toLocaleString(locale, {options})

'locale' = specifies the language
'options' = object with formatting options
*/

let myNum = 123405.6789
console.log(myNum)
//myNum = myNum.toLocaleString("pt-BR") // Brazilian Portuguese
//myNum = myNum.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"})
/*myNum = .47
myNum = myNum.toLocaleString(undefined, {style:"percent"})*/
myNum = 100
myNum = myNum.toLocaleString(undefined, {style:"unit", unit: "celsius"})
console.log(myNum)

