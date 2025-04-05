require("./styles/globals.css");

const barMenuBtn = document.querySelector("#barMenu");
const barMenu = document.getElementById("menu");
const overlay = document.querySelector(".overlay");
const closeMenuBtn = document.querySelectorAll(".closeMenu");
const menuContainer = document.querySelector(".menuContainer");
const header = document.querySelector("header");
const scrollTopBtn = document.querySelector(".scrollTopBtn");

barMenuBtn.addEventListener("click", () => {
  barMenu.style.transform = "translateX(0)";
  barMenu.style.transition = "transform 0.3s ease-in-out";
  menuContainer.style.display = "block";
  overlay.style.display = "block";
});

closeMenuBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    barMenu.style.transform = "translateX(-100%)";
    barMenu.style.transition = "transform 0.3s ease-in-out";
    menuContainer.style.display = "none";
    overlay.style.display = "none";
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.style.position = "fixed";
    header.style.transition = "header 1s ease-in-out";
    scrollTopBtn.style.display = "block";
    scrollTopBtn.style.transition = "scrollTopBtn 1s ease-in-out";
  }else{
    header.style.position = "static";
    scrollTopBtn.style.display = "none";

  }
});
