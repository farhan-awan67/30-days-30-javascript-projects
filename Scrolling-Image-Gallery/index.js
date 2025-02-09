let scrollContainer = document.querySelector(".image-gallery");
let nextBtn = document.getElementById("nxtBtn");
let backBtn = document.getElementById("back-btn");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.style.scrollBehavior = "auto";
  scrollContainer.scrollLeft += e.deltaY;
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 300;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 300;
});
