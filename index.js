const timer = document.getElementById('stopwatch');

var day = 0;
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}
function resetTimer() {
  day = 0; hr = 0;min = 0;sec = 0;
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    day = parseInt(day);

    sec = sec + 1;

    if (sec == 10) {
      min = min + 1;
      sec = 0;
    }
    if (min == 10) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    if (hr == 10) {
      day = day + 1;
      hr = 0;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = sec;
    }
    if (min < 10 || min == 0) {
      min = min;
    }
    if (hr < 10 || hr == 0) {
      hr = hr;
    }
    if (day < 10 || day == 0) {
      day = day;
    }

    timer.innerHTML = day + ':' + hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 100);
  }
}

function resetTimer() {
    timer.innerHTML = '0:0:0:0';
}
