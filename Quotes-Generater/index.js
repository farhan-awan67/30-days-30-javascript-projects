let quote = document.getElementById("quote");
let author = document.getElementById("author");

let apiUrl = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  quote.innerText = data.content;
  author.innerText = data.author;
}
getQuote(apiUrl);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerText +
      "-- by" +
      author.innerText,
    "tweet window",
    "width=500, height=200"
  );
}
