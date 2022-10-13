//* console.time()
/*
        → Starts a timer you can use to track how long an operation takes.
        → Give each timer a unique name.
*/

// Start
console.time("Response time")

alert("Click the OK button")
setTimeout(() => {console.log("Hello, world")}, 15000) // will be executted after .timeEnd() is done
// so it times synchronous operations only

// End
console.timeEnd("Response time")
