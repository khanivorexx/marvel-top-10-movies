const out = document.getElementById("out");
const now = new Date();
let tsag = String(now.getHours()).padStart(2, "0");
let min = String(now.getMinutes()).padStart(2, "0");
let sec = String(now.getSeconds()).padStart(2, "0");

const addCount = () => {
  sec++;
  if (sec === 60) {
    min++;
    sec = 0;
  } else if (min === 60) {
    tsag++;
    min = 0;
  } else if (tsag === 24) {
    tsag = 0;
  }
  out.textContent = tsag + ":" + min + ":" + sec;
};
let interval = setInterval(addCount, 1000);
const stopInterval = () => {
  clearInterval(interval);
};

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let seconds = 0;
let timerId = null;
startBtn.onclick = () => {
  if (timerId) return;
  timerId = setInterval(() => {
    seconds++;
    display.textContent = seconds;
  }, 1000);
};
const updatedisplay = () => {
  const s = seconds % 60;
  const totalMin = (seconds - s) / 60;
  const m = totalMin % 60;
  const h = (totalMin - m) / 60;

  display.textContent = updatedisplay;
  String(h).padStart(2, "0") +
    ":" +
    String(m).padStart(2, "0") +
    ":" +
    String(s).padStart(2, "0");
};

// let n = 0;
// setInterval(() => {
//   n++;
//   display.textContent = n;
// }, 1000);

// setTimeout(() => {
//   console.log("asd");
// }, 2000);

// let count = 0;
// const id = setInterval(() => {
//   count++;
//   console.log(count);
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
// }, 5000);
