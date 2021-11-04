const toggleBtn = document.querySelector(".btn-hamburger");
const sideBar = document.querySelector("aside");
const closeBtn = document.querySelector(".btn-close");

toggleBtn.addEventListener("click", function () {
  sideBar.style.right = "0px";
});

closeBtn.addEventListener("click", function () {
  sideBar.style.right = "-254px";
});
