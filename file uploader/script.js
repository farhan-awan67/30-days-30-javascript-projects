let btn = document.querySelector("button");
let inpt = document.querySelector("input");

btn.addEventListener("click", () => {
  inpt.click();
});

inpt.addEventListener("change", () => {
  if (inpt.files[0] !== undefined) {
    btn.innerText = inpt.files[0].name;
  }
});
