let inputBox = document.getElementById("input");
let copy = document.getElementById("copy");

const length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialChar = "!@#$%&*-_";
let allChars = upperCase + lowerCase + numbers + specialChar;

function generateRanPass() {
  password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialChar[Math.floor(Math.random() * specialChar.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  inputBox.value = password;
}

copy.addEventListener("click", () => {
  inputBox.select();
  document.execCommand("copy");
  inputBox.value = "";
});
