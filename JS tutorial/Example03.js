
// window prompt

/* let username = window.prompt("USERNAME: ")
console.log(username) */

// HTML input box

let username

document.getElementById("myButt").onclick = function() {
    username = document.getElementById("user").value

    if (username != "") {
        console.log("hello, ", username)
        window.alert("Hello " + username)
    } else {
        window.alert("ENTER A $&*@#$ USERNAME")
        console.log("empty or null")
    }
}