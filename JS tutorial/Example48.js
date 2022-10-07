
const x = document.getElementById("coords")

function getGeo() {
    try{
        navigator.geolocation.getCurrentPosition(showPosition)
    } catch {
        x.innerHTML = err
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude → " + position.coords.latitude + "<br>Longitude → " + position.coords.longitude
}