const navMenuEl = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu__button");
const headerMenuEl = document.querySelector(".header");
const exitEl = document.querySelector(".fa-xmark");

const handleMenu = () => {
  if (navMenuEl.classList.contains("nav__active")) {
    navMenuEl.classList.remove("nav__active")
    headerMenuEl.classList.remove("header__active");
  } else {
    navMenuEl.classList.add("nav__active");
    headerMenuEl.classList.add("header__active");
  }
}

menuBtn.addEventListener("click", handleMenu);
exitEl.addEventListener("click", handleMenu);
