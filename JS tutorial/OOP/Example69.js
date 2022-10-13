
try{
    let x = window.prompt("Enter a number")
    x = Number(x)

    if(isNaN(x)) throw "Not a number"
    if(x == "") throw 'empty'

    console.log(x)
} catch(err) {
    console.log(err)
} finally {
    // executes regardless of conditions above
    console.log("This will always execute")
}