let lights = ["red", "yellow", "green"];

const display = document.getElementById("light");

for (let i = 0; i < lights.length; i++) {
  setTimeout(() => {
    display.innerText = lights[i]; // ✅ works as expected
  }, i * 1000);
}

