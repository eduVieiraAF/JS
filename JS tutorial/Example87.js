let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

//* Draw lines
/*
context.lineWidth = 5
context.strokeStyle = "crimson"
context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(250,500);
context.moveTo(500,0)
context.lineTo(250,250)
context.stroke();
*/

//* Draw triangle
/*
context.lineWidth = 5
context.fillStyle = "crimson"
context.beginPath();
context.moveTo(250,0)
context.lineTo(0,250)
context.lineTo(500,250)
context.lineTo(250,0)
context.stroke();
context.fill()
*/

//* Draw rectangle
/*
context.strokeStyle = "crimson"
context.fillStyle = "crimson"
context.lineWidth = 5
context.strokeRect(10, 10, 210, 210)
context.fillRect(20, 20, 50, 50)
*/

//* Draw circle
/*
context.beginPath()
context.fillStyle = "crimson"
context.lineWidth = 50
context.arc(250, 250, 150, 0, 2 * Math.PI) // (x, y,sAngle, eAngle, counterClockwise)
context.stroke()
context.fill()
*/

//* Draw text
context.font = "50px monospace"
context.fillStyle = "crimson"
context.textAlign = "center"
context.fillText("Canvas", canvas.width / 2, canvas.height /2)
