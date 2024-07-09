let password = document.getElementById("password");
let btn = document.getElementById("btn");
let image = document.getElementById("image");

btn.addEventListener("click", (e) => {
  if (image.src.includes("close")) {
    image.src = "./images/eye-open.png";
    password.type = "text";
  } else {
    image.src = "./images/eye-close.png";
    password.type = "password";
  }
});
