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

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2500);
}
