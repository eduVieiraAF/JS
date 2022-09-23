let count = 0

document.getElementById("btn_decrease").onclick = function() {
    count -= 1
    document.getElementById("lbl_count").innerHTML = count
}

document.getElementById("btn_reset").onclick = function() {
    count = 0
    document.getElementById("lbl_count").innerHTML = count
}

document.getElementById("btn_increase").onclick = function() {
    count += 1
    document.getElementById("lbl_count").innerHTML = count
}