let stopwatchInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(updateStopwatch, 10);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
}

function updateStopwatch() {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }

  updateDisplay();
}

function updateDisplay() {
  document.getElementById('minutes').innerText = formatTime(minutes);
  document.getElementById('seconds').innerText = formatTime(seconds);
  document.getElementById('milliseconds').innerText = formatTime(milliseconds / 10);
}

function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}
