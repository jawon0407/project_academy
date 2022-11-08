const first = document.querySelector(".first");
const middle = document.querySelector(".middle");
const last = document.querySelector(".last");
const header = document.querySelector("#headerArea");
const historyDivide = document.querySelector(".history_divide");
const historyDivideBox = document.querySelector(".history_divide_box");
const title = document.querySelector(".titleArea h2");
const goTableTopBtn = document.querySelector(".table_top");

goTableTopBtn.style.display = "none";

first.addEventListener("click", () => {
  first.classList.add("active");
  middle.classList.remove("active");
  last.classList.remove("active");
  window.scrollTo({ top: 6500, behavior: "smooth" });
});

middle.addEventListener("click", () => {
  first.classList.remove("active");
  middle.classList.add("active");
  last.classList.remove("active");
  window.scrollTo({ top: 3600, behavior: "smooth" });
});

last.addEventListener("click", () => {
  first.classList.remove("active");
  middle.classList.remove("active");
  last.classList.add("active");
  window.scrollTo({ top: 1050, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  console.log(historyDivide.getBoundingClientRect().top);
  if (historyDivide.getBoundingClientRect().top < 150) {
    title.style.marginBottom="0";
    header.style.display = "none";
    goTableTopBtn.style.display = "flex";
    goTableTopBtn.classList.add("button_on");
    historyDivideBox.classList.add("full_width");
    historyDivide.classList.add("history_header");
  } else {
    title.style.marginBottom="150px";
    title.classList.remove(".title_margin_delete");
    header.style.display = "flex";
    goTableTopBtn.style.display = "none";
    goTableTopBtn.classList.remove("button_on");
    historyDivideBox.classList.remove("full_width");
    historyDivide.classList.remove("history_header");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1050 && window.scrollY < 3600) {
    first.classList.remove("active");
    middle.classList.remove("active");
    last.classList.add("active");
  } else if (window.scrollY >= 3600 && window.scrollY < 6500) {
    first.classList.remove("active");
    middle.classList.add("active");
    last.classList.remove("active");
  } else if (window.scrollY >= 6500) {
    first.classList.add("active");
    middle.classList.remove("active");
    last.classList.remove("active");
  }
});

goTableTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 1050, behavior: "smooth" });
});

const contentAreaAnchor = document.querySelectorAll(".contentArea a");
contentAreaAnchor.forEach((i) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
