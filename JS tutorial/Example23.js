function myFunction() {
    const message = document.getElementById("p1")
    message.innerHTML = ""
    let x = document.getElementById("numInput").value

    try {
        switch (true) {
            case x == "":
                throw "empty"
            
            case isNaN(x):
                throw "Not a number"
        }
        
        x = Number(x)
        switch(true) {
            case x == 25:
                throw  "right in the middle"
            
            case x > 25: 
                throw "too high"
            
            case x < 25:
                throw "too low"
        }
    } catch(err) {
        message.innerHTML = "Input is " + err
    }
}