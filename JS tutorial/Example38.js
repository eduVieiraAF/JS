async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {resolve("I love JavaScript")}, 3000)
    })

    document.getElementById("demo").innerHTML = await myPromise
}

myDisplay()

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