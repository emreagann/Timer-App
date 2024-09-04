const minute = document.getElementById("minute");
const second = document.getElementById("second");
const selectedMinute = document.getElementById("selected-minute");
const selectedSecond = document.getElementById("selected-second");
const startButton = document.getElementById("start");
const deleteButton = document.getElementById("delete");

let stop = false;

selectedMinute.addEventListener("change", () => {
    minute.textContent = selectedMinute.value.padStart(2, "0");
});

selectedSecond.addEventListener("change", () => {
    second.textContent = selectedSecond.value.padStart(2, "0");
});

startButton.addEventListener("click", () => {
    stop = false; // Reset stop flag when starting a new timer
    startTimer();
});

deleteButton.addEventListener("click", () => {
    stop = true;
    minute.textContent = "00";
    second.textContent = "00";
    selectedMinute.value = "00";
    selectedSecond.value = "00";
});

function startTimer() {
    let min = parseInt(minute.textContent, 10);
    let s = parseInt(second.textContent, 10);

    const interval = setInterval(() => {
        if (stop) {
            clearInterval(interval);
            return;
        }

        if (s === 0) {
            if (min === 0) {
                clearInterval(interval);
                window.alert("Time is out");
                selectedMinute.value = "00";
                selectedSecond.value = "00";
                return;
            }
            min--;
            s = 59;
        } else {
            s--;
        }

        minute.textContent = min.toString().padStart(2, "0");
        second.textContent = s.toString().padStart(2, "0");
    }, 1000);
}
