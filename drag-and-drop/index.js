let right = document.getElementById("right");
let left = document.getElementById("left");
let lists = document.getElementsByClassName("list");

for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;

    right.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    right.addEventListener("drop", (e) => {
      right.appendChild(selected);
      selected = null;
    });

    left.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    left.addEventListener("drop", (e) => {
      left.appendChild(selected);
      selected = null;
    });
  });
}
