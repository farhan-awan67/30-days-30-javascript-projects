let popup = document.getElementById("openpopup");
let submit = document.getElementById("submit");
let ok = document.getElementById("ok");

submit.addEventListener("click", () => {
  popup.classList.add("open");
});

ok.addEventListener("click", () => {
  popup.classList.remove("open");
});
