const showInfo = (e) => {
    var event = e || window.event;
    var X = event.clientX;
    var Y = event.clientY;
    var position = "Position of mouse: <br><br>  X: " + X + " <br> Y: " + Y
    document.getElementById("paragraph").innerHTML = position;
}
document.onmousemove = showInfo;