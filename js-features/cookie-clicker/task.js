const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker_speed");
let dataStart;
let dataEnd;
cookie.onclick = function() {
    if(Number(clickerCounter.textContent) === 0) {
        dataStart = new Date();
    } else { 
        dataEnd = new Date();
        dataStart = dataEnd;
    }
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    if(Number(clickerCounter.textContent) % 2 !== 0) {
        cookie.width = "250";
        cookie.height = "200";
    } else {
        cookie.width = "200";
        cookie.height = "150";
    }
}