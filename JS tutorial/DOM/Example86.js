const myButton = document.getElementById("myButton");
const myAnim = document.getElementById("myDiv");

const myButton2 = document.getElementById("myButton2");
const myAnim2 = document.getElementById("myDiv2");

const myButton3 = document.getElementById("myButton3");

const myButton4 = document.getElementById("myButton4");

myButton.addEventListener("click", begin);
myButton2.addEventListener("click", begin2);

myButton3.addEventListener("click", begin3);

myButton4.addEventListener("click", begin4);

function begin() {
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame() {
        if (x >= 350 || y >= 350) {
            clearInterval(timerId);
        } else {
            x += 1;
            y += 1;
            myAnim.style.top = y + "px";
            myAnim.style.left = x + "px";
        }
    }
}

function begin2() {
    let timerId2 = null;
    let degrees = 0;

    timerId2 = setInterval(frame, 5) 

    function frame() {
        if (degrees >= 720) {
            clearInterval(timerId2);
        } else {
            degrees += 1;
            myAnim2.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}

function begin3() {
    let timerId3 = null;
    let degrees = 0;
    let x = 0;
    let y = 0;

    timerId3 = setInterval(frame, 5);

    function frame(){
        if (x >= 350 || y >= 350) {
            clearInterval(timerId3);
        } else {
            degrees += 4;
            x += 1;
            y += 1;
            myAnim2.style.transform = "rotateZ("+degrees+"deg)";
            myAnim.style.top = y + "px";
            myAnim.style.left = x + "px";
        }
    }
}

function begin4() {
    let timerId4 = null;
    let scaleX = 1;
    let scaleY = 1;

    timerId4 = setInterval(frame, 5);

    function frame(){
        if (scaleX <= 0.1 || scaleY <= 0.1) {
            clearInterval(timerId4);
        } else {
           scaleX -= 0.01;
           scaleY -= 0.01;
           myAnim.style.transform = "scale("+scaleX+", "+scaleY+")"
           myAnim2.style.transform = "scale("+scaleX+", "+scaleY+")"
        }
    }
}
    