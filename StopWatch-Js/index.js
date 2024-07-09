const heading = document.getElementById("heading");
// const stop = document.getElementById('stop');
// const start = document.getElementById('start');
// const reset = document.getElementById('reset');

let [seconds, minutes, hour] = [0, 0, 0];
let timer = null;

function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hour++;
    }
  }
  let h = hour < 10 ? "0" + hour : hour;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  heading.innerHTML = h + ":" + m + ":" + s;
}

function startWatch() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function stop() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  [seconds, minutes, hour] = [0, 0, 0];
  heading.innerHTML = "00:00:00";
}
