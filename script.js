// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//menghilangkan menu dengan klik random

const hamburger = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

var typed = new Typed(".multiple-text", {
  strings: ["Student", "Computer Science", "BNCC", "Pirate King"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});
