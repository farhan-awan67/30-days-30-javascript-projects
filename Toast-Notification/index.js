const success = document.getElementById("success");
const error = document.getElementById("error");
const invalid = document.getElementById("invalid");
const noti = document.getElementById("Noti");

let sucCess = '<i class="fa-solid fa-circle-check"></i> successfuly !';
let erRor = '<i class="fa-solid fa-circle-xmark"></i> error';
let inValid = '<i class="fa-solid fa-circle-exclamation"></i> invalid action';

function getNoti(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  noti.appendChild(toast);
  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
