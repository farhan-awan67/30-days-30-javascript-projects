let num = document.getElementById("number");
let count = 0;

setInterval(() => {
  num.innerText = count + "%";
  if (count === 65) {
    clearInterval();
  } else {
    count += 1;
  }
}, 30);
