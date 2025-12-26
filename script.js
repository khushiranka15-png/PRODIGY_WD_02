// Variables for time
let min = 0;
let sec = 0;
let ms = 0;
let timer = null;

// Get HTML elements
let time = document.getElementById("time");
let lapsList = document.getElementById("laps-list");

// Start button
document.getElementById("start").addEventListener("click", function() {
    if(timer != null) return; // prevent multiple timers
    timer = setInterval(run, 10);
});

// Pause button
document.getElementById("pause").addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
});

// Reset button
document.getElementById("reset").addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
    min = 0;
    sec = 0;
    ms = 0;
    time.textContent = "00:00:00";
    lapsList.innerHTML = ""; // remove laps
});

// Lap button
document.getElementById("lap").addEventListener("click", function() {
    let lapTime = format(min) + ":" + format(sec) + ":" + format(Math.floor(ms/10));
    let li = document.createElement("li");
    li.textContent = lapTime;
    lapsList.appendChild(li);
});

// Function to run stopwatch
function run() {
    ms += 10;
    if(ms >= 1000) {
        ms = 0;
        sec += 1;
    }
    if(sec >= 60) {
        sec = 0;
        min += 1;
    }
    time.textContent = format(min) + ":" + format(sec) + ":" + format(Math.floor(ms/10));
}

// Format numbers to 2 digits
function format(number) {
    if(number < 10) {
        return "0" + number;
    } else {
        return number;
    }
}
