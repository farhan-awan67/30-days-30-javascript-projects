let Card = document.getElementById("card");
let rating = document.getElementById("rating");
let thanksCard = document.getElementById("thank-you");
let btn = document.getElementById("show-thanks");
let result = document.querySelector("span");

// getting target number
rating.addEventListener("click", (e) => {
    e.target.style.backgroundColor = 'green';
  result.innerText = e.target.innerText;
});

// displaying thanks card
btn.addEventListener("click", () => {
  thanksCard.style.display = "block";
  Card.style.display = "none";
});
