let box = document.getElementById("box");
let arrow = document.getElementById("arrow");
let socials = document.getElementById("socials");
let text = document.getElementById("text");
let options = document.getElementsByClassName("options");
let socialText = document.getElementById("social-text");

box.addEventListener("click", () => {
  arrow.classList.toggle("move");
  socials.classList.toggle("hide");
});

for (option of options) {
  option.onclick = function () {
    text.innerHTML = this.textContent;
    socials.classList.toggle("hide");
    arrow.classList.toggle("move");
  };
}
