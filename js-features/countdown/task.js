const initialTimer = document.getElementById("timer");
 let seconds = Number(initialTimer.textContent);
 initialTimer.textContent =  new Date(2023, 1, 1, 0, 0, seconds).toLocaleTimeString();
 const link = document.getElementById("link"); 
 function countdownTimer() {
    seconds--;
    initialTimer.textContent =  new Date(2023, 1, 1, 0, 0, seconds).toLocaleTimeString();

    if(seconds === 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');
        link.click();
    }
}
const intervalId = setInterval(countdownTimer, 1000);