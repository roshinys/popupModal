var open = document.getElementById("open");
var close = document.getElementById("close");
var container = document.getElementById("container");

open.addEventListener("click", () => {
  container.classList.add("active");
});
close.addEventListener("click", () => {
  container.classList.remove("active");
});
