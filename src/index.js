require("./styles/globals.css");

const barMenuBtn = document.querySelector("#barMenu");
const barMenu = document.getElementById("menu");
const overlay = document.querySelector(".overlay");
const closeMenuBtn = document.querySelectorAll(".closeMenu");
const menuContainer = document.querySelector(".menuContainer");

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
