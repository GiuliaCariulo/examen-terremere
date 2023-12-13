var burger = document.querySelector(".burger-menu");
var menu = document.querySelector(".background-blur-burger");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

var carte = document.querySelector(".menu-mobile");
var button = document.querySelector(".button-menu");

var toggleMenu = function toggleMenu() {
  carte.classList.toggle("is-active");
};

button.addEventListener("click", toggleMenu);
