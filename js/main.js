var burger = document.querySelector(".burger-menu");
var menu = document.querySelector(".menu");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
