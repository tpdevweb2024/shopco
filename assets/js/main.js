const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

const closeBtn = document.querySelector("#topbar img");
const topbar = document.querySelector("#topbar");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("open");
  if (hamburger.style.transform === "rotate(90deg)") {
    hamburger.style.transform = "rotate(0deg)";
  } else {
    hamburger.style.transform = "rotate(90deg)";
  }
});

closeBtn.addEventListener("click", function () {
  topbar.remove();
  localStorage.setItem("topbar", "inactive");
});

if (localStorage.getItem("topbar")) {
  topbar.remove();
}
