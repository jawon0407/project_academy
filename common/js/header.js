const header = document.querySelector(`header`);
const bottomNav = document.querySelectorAll(".bottom_nav_content > li");
const navText = document.querySelectorAll(".menu li a");
const logoImg = document.querySelector("h1 a");

bottomNav.forEach((li) => {
  li.addEventListener("mouseover", () => {
    header.style.height = "540px";
  });
  li.addEventListener("mouseleave", () => {
    header.style.height = "190px";
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY < 980) {
    header.classList.remove("on");
  } else {
    header.classList.add("on");
  }
});
