//* The 'async' keyword makes a function return a Promise
//* The 'await' keyword makes an async function wait for a Promise

//* Example #1
async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {resolve("I love JavaScript")}, 3000)
    })

    document.getElementById("demo").innerHTML = await myPromise
}

myDisplay()

//* Example #2
async function getFile() {
    let myPromise2 = new Promise(function(resolve) {
        let req = new XMLHttpRequest()
        req.open('GET', "myFile.html")
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response)
            } else {
                resolve("page not found")
            }
        }

        req.send()
    })

    document.getElementById("demo2").innerHTML = await myPromise2
}

getFile()

//* Example #3
async function loadFile() {
    let fileLoaded = false

    if (fileLoaded) { return "File loaded" }
    else { throw "File NOT found" }
}

loadFile().then(value => console.log(value)).catch(error => console.log(error))

//* Example #4 - Alternative for example #3

function loadFile2() {
    let fileLoaded = true

    if (fileLoaded) { return Promise.resolve("File2 loaded") }
    else { return Promise.reject("File2 NOT found")}
}

loadFile2().then(value => console.log(value)).catch(error => console.log(error))