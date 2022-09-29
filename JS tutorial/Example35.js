function hello1() {
    console.log("Hello, World")
}

setTimeout(hello1, 3000)
console.log("this one goes first")

function hello2() {
    console.log("Hello, World 2")
}

let intervalId = setTimeout(hello2, 4000)
console.log(`Id: ${intervalId}`)

function showTime() {
    let dateTime = new Date()
    let time = dateTime.toLocaleTimeString()
    document.getElementById("timeGiver").innerHTML = time
    setTimeout(showTime, 1000)
}

showTime()

/*
As you have seen in the above example, the program executes a block of code after the specified time 
interval. If you want to stop this function call, you can use the clearTimeout() method.

let count = 0;

function increaseCount(){

    count += 1;
    console.log(count)
}

let id = setTimeout(increaseCount, 3000);

clearTimeout(id); 
console.log('setTimeout is stopped.');
*/