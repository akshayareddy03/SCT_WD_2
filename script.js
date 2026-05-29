let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
let lapCount = 1;

// DOM elements
const display = document.getElementById("display");
const laps = document.getElementById("laps");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");

// Update display
function updateDisplay() {
  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");
  display.textContent = `${h}:${m}:${s}`;
}

// Stopwatch logic
function runStopwatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  updateDisplay();
}

// Start
function startStopwatch() {
  if (timer !== null) return; // already running
  timer = setInterval(runStopwatch, 1000);
}

// Pause
function pauseStopwatch() {
  clearInterval(timer);
  timer = null;
}

// Reset
function resetStopwatch() {
  clearInterval(timer);
  timer = null;

  seconds = 0;
  minutes = 0;
  hours = 0;
  lapCount = 1;

  updateDisplay();
  laps.innerHTML = "";
}

// Lap
function recordLap() {
  if (hours === 0 && minutes === 0 && seconds === 0) return;

  const li = document.createElement("li");
  li.textContent = `Lap ${lapCount}: ${display.textContent}`;
  laps.prepend(li);

  lapCount++;
}

// Event listeners
startBtn.addEventListener("click", startStopwatch);
pauseBtn.addEventListener("click", pauseStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
lapBtn.addEventListener("click", recordLap);

// Initialize
updateDisplay();