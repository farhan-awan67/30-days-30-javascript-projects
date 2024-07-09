let input = document.getElementById("input");
let image = document.getElementById("qr-img");
let imageBox = document.getElementById("img-box");
let card = document.querySelector(".card");

function GenertaeQR() {
  // image.src =
  //   "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
  //   input.value;
  if (input.value.length > 0) {
    image.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
  } else {
    card.classList.add("shake");
    setTimeout(() => {
      card.classList.remove("shake");
    }, 1000);
    // input.value;
  }
  input.value = "";
}
