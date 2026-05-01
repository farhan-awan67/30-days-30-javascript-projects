let textarea = document.querySelector("textarea");
let span = document.querySelector("span");

textarea.addEventListener("input", (e) => {
  let left = 20 - e.target.value.length;
  span.innerText = left;
  if (left < 0) {
    span.style.color = "red";
  } else {
    span.style.color = "white";
  }
});
