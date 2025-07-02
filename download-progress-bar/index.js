let downloadBar = document.querySelector(".download-bar");
let downloadBtn = document.querySelector(".download-btn");
let start = false;

downloadBtn.addEventListener("click", () => {
  if (start) {
    return;
  }
  let count = 0;

  let intervalId = setInterval(() => {
    start = true;
    count++;
    downloadBar.style.width = count + "%";

    if (count === 100) {
      clearInterval(intervalId);
      start = false;
    }
  }, 100);
});
