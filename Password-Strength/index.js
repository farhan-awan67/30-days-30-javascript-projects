let box = document.getElementsByClassName("box");
let password = document.getElementById("password");
let str = document.getElementById("strength");
let message = document.getElementById("message");

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
  if (password.value.length < 4) {
    str.innerHTML = "Weak";
    str.style.color = "red";
    box.style.borderColor = "red";
  } else if (password.value.length >= 4 && password.value.length <= 8) {
    str.innerHTML = "Medium";
    str.style.color = "green";
    box.style.borderColor = "green";
  } else {
    str.innerHTML = "Strong";
    str.style.color = "yellow";
    box.style.borderColor = "yellow";
  }
});

console.log(box);
