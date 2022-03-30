const links = document.querySelectorAll(".nav__link");
const submenu = document.querySelectorAll(".nav__item");
const subLinks = document.querySelectorAll(".nav__sub-link");

const menu = document.getElementById("nav-menu");
const toggle = document.getElementById("nav-toggle");
const close = document.getElementById("nav-close");

function reset() {
  submenu.forEach((sub) => {
    sub.classList.remove("collapse");
    sub.classList.remove("rotate");
  });
}

function show() {
  menu.classList.toggle("show-menu");
  toggle.classList.toggle("show");
  close.classList.toggle("show");
}

toggle.addEventListener("click", show);

close.addEventListener("click", show);

links.forEach((link) => {
  link.addEventListener("click", function () {
    if (!link.parentNode.classList.contains("collapse")) {
      reset();
      link.parentNode.classList.add("collapse");
      link.parentNode.classList.add("rotate");
    } else {
      link.parentNode.classList.remove("collapse");
      link.parentNode.classList.remove("rotate");
    }
  });
});

subLinks.forEach((sublink) => {
  sublink.addEventListener("click", function () {
    reset();
    show();
  });
});
