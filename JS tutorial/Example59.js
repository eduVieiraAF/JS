
//? Web Workers API

//* A web worker is  a JavaScript running in the background, without affecting the performance of the page.
/*
? What is a web worker?
When executing scripts in an HTML page, the page becomes unresponsive until the script is finished

A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting
the performance of the page. You can continue to do whatever you want: clicking selecting things, etc., 
while the web worker runs in the background.
*/

let w;

function startWorker() {
  if(typeof(w) == "undefined") {
    w = new Worker("Example59_demo_worker.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
    console.log(event.data)
  };
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}