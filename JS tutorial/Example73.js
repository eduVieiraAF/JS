//* SYNCHRONOUS CODE
/* 
    → in an ordered sequence
    → step-by-step linear instructions
    → start now, finish now
*/

//* ASYNCHRONOUS CODE
/*
    → out of sequence
    → access a database, fetch a file, some task that takes time
    → start now, finish some time later
*/

//? Synchronous example
console.log("1→ START")
console.log("2→ this is synchronous")
console.log("3→ END")

//? Asynchornous example
setTimeout(() => console.log("1→ tasks"), 5000)
setTimeout(() => console.log("2→ tasks"), 2000)
setTimeout(() => console.log("3→ tasks"), 15000)
setTimeout(() => console.log("4→ tasks"), 1000)