let btns = document.getElementById("btns");
let display = document.getElementById("display");

btns.addEventListener("click", (e) => {
  let currentValue = e.target.innerText;
  if (currentValue === "C") {
    display.value = "";
  } else if (currentValue === "=") {
    let result = eval(display.value);
    display.value = result;
  } else if (currentValue === "⌫") {
    display.value = display.value.slice(0, -1);
  } else {
    display.value += currentValue;
  }
});
